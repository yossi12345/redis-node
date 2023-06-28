const redis=require("redis")

const redisClient=redis.createClient(process.env.REDIS_PORT,process.env.REDIS_HOST)
redisClient.on("error", (error)=>{
    console.log("error:",error)
})
async function redisConnect(){
    await redisClient.connect()
}
module.exports={
    redisClient,
    redisConnect
}