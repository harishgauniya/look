import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDataBase=async()=>{
    try{
        const ConnectionDb=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDb Connected !! DB HOST :${ConnectionDb.connection.host}`)


    }
    catch(error){
        console.log(" MongoDb Connection Failed", error)
        process.exit(1)


    }
    

}
export default connectDataBase