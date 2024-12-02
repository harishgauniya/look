import connectDataBase from "./db/index.js"
import dotenv from "dotenv"

dotenv.config({
    path:'./env'
})

connectDataBase()
.then(()=>{
    app.listen(process.env.PORT ||8000,()=>{
        console.log(`server is listen on port ${process.env.Port}`)
    })
})
.catch((err)=>{
    console.log("Mongo db connection failed",err)
})
