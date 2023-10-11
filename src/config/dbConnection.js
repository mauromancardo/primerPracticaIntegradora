import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        await mongoose.connect(
          "mongodb+srv://mauromancardo:mauro123@cluster0.s97seuj.mongodb.net/eCommerceDB?retryWrites=true&w=majority"
        );
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(`hubo un error conectando la base de datos: ${error.message}`);
    }
};