const express=require("express")
const router=new express.Router()
const {redisClient}=require("../databases/redis")

router.post("/set-string", async (req,res)=>{
    try{
        redisClient.set(req.body.key,req.body.value)
        res.send("success")
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})
router.get("/get-string/:key",async (req,res)=>{
    try{
        const value=await redisClient.get(req.params.key)
        res.send({value})
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})
router.post("/set-list",async(req,res)=>{
    try{
        await redisClient.rPush(req.body.key,req.body.list)
        res.send("success")
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})
router.get("/get-list/:key",async(req,res)=>{
    try{
        const list=await redisClient.lRange(req.params.key,0,-1)
        res.send(list)
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})
router.post("/set-hash",async(req,res)=>{
    console.log(";lko;k")
    try{
        for (const key in req.body.hash){
            console.log("key",key,"val",req.body.hash[key])
            await redisClient.hSet(req.body.key,key,req.body.hash[key])
        }
        res.send("success")
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})
router.get("/get-hash/:key",async(req,res)=>{
    try{
        const hash=await redisClient.hGetAll(req.params.key)
        console.log(hash)
        res.send(hash)
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})
module.exports=router;