const redis=require("redis")

const redisClient=redis.createClient(
    {
        url:process.env.REDIS_HOST
    }
)
// const redisClient=redis.createCluster(
//     {
//         rootNodes:[
//             {
//                 url:process.env.REDIS_HOST
//             }
//         ]
//     }
// )
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