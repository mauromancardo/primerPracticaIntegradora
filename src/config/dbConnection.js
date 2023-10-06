import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        await mongoose.connect(
          "mongodb+srv://mauro:cursocoder@cursocoder.rclosh3.mongodb.net/ecommerceDB?retryWrites=true&w=majority"
        );
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(`hubo un error conectando la base de datos: ${error.message}`);
    }
};