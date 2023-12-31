import { Error } from "mongoose";
import {productsModel} from "./models/products.model.js"
import mongoose from "mongoose";
export class ProductsManagerMongo{
    constructor(){
this.model = productsModel;
    };

    async createProduct(productInfo){
        try {
             const result = await this.model.create(productInfo)
        return result ;
            } catch (error) {
                console.log("createProducts",error.message)
            throw new Error("no se pudo crear el producto")
        }
    };
    async getProducts(){
         try {
           const result = await this.model.find();
           return result;
         } catch (error) {
           console.log("getProducts", error.message);
           throw new Error("no se pudo obtener el listado de productos");
         }
         
    };
   

    async getProductById(productId){
        try {
          const result = await this.model.findById(productId);
          return result;
        } catch (error) {
          console.log("getProductById", error.message);
          throw new Error("no se pudo obtener el id del producto");
        }
        
    };
    async updateProduct(productId, newProductInfo){
         try {
           const result = await this.model.findByIdAndUpdate(productId,newProductInfo,{new:true});
           /* console.log(result) */
           if (!result){
            throw new Error("no se pudo encontr el producto para actualizar");
           } else{
            return result;
           }
         } catch (error) {
           console.log("updateProduct", error.message);
           throw new Error("no se pudo actualizar el producto");
         }
         
    };


async deleteProduct(productId) {
  try {
    const ObjectId = mongoose.Types.ObjectId;
    const productObjectId = new ObjectId(productId);
    const result = await this.model.findByIdAndDelete(productObjectId);
    if (!result) {
      throw new Error("No se pudo encontrar el producto para eliminar");
    }
  } catch (error) {
    console.log("deleteProduct", error.message);
    throw new Error("No se pudo eliminar el producto");
  }
}};

