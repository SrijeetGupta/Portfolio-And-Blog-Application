import mongoose from "mongoose"


export const Connection =async(USERNAME,PASSWORD)=>{
    const URL=`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.jka6y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try{
       await mongoose.connect(URL);
       console.log('DataBase is connected successfully');
    }catch(error){
        console.log('Error while connecting to DataBase',error);
        process.exit(1);
    }
}

export default Connection;