const port=process.env.PORT
const app=require("./app")
const { redisConnect } = require("./databases/redis")
const signals=["SIGINT","SIGTERM","SIGUP"]
async function gracefulShutdown(signal,server){
    process.on(signal,async ()=>{
        server.close()
        //await disconnectFromMongoDB()//לא עובד משום מה 
        console.log("Server shutdown successfully!",signal)
        process.exit(0)
    })
}
const server=app.listen(port,async ()=>{
    await redisConnect()
    console.log("Server connected, port:",port)
    
    signals.forEach((signal)=>{
        gracefulShutdown(signal,server)
    })
})
