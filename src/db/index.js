import mongoose from 'mongoose';
import{ DB_NAME} from '../constants.js';

const connectDB = async () => {
    try{
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
       console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host} \n`);
    }
    catch(err){
        console.log("Error connecting to the database", err);
        process.exit(1);
    }

}

export default connectDB;