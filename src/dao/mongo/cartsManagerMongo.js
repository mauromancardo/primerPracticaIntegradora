import { cartsModel } from "./cartsModel.js";

export class CartsManagerMongo {
  constructor() {
    this.model = cartsModel;
  }

  //get carts
  async getCarts() {
    try {
      const result = await this.model.find();
      return result;
    } catch (error) {
      console.log(`get carts error: ${error.message}`);
      throw new Error(`get carts error: ${error.message}`);
    }
  }
  async addCart(cartId, productId) {
    try {
      const cart = await this.getCartById(cartId);
      // const productExist = cart.products.find(elm=>elm.productId == productId);
      // console.log("productExist",productExist);
      const newProductCart = {
        productId: productId,
        quantity: 1,};
      cart.products.push(newProductCart);
      const result = await this.model.findByIdAndUpdate(cartId, cart, {
        new: true,
      });
      return result;
    } catch (error) {
      console.log(error.message);
      throw new Error("No se pudo agregar el producto al carrito");
    }
  }
  //add cart
 /*  async addCart(cartInfo) {
    try {
      const result = await this.model.create(cartInfo);
      return result;
    } catch (error) {
      console.log(`add cart error: ${error.message}`);
      throw new Error(`add cart error: ${error.message}`);
    }
  } */

  //get cart by ID
  async getCartById(id) {
    try {
      const result = await this.model.findById(id).populate("products.productId");
      return result;
    } catch (error) {
      console.log(`get cart by ID error: ${error.message}`);
      throw new Error(`get cart by ID error: ${error.message}`);
    }
  }
  async updateCart(id, updatedContent) {
    try {
      const result = await this.model.findByIdAndUpdate(id, updatedContent, {
        new: true,
      });
      if (!result) {
        throw new Error("cart not found");
      } else {
        return result;
      }
    } catch (error) {
      console.log(`update cart error: ${error.message}`);
      throw new Error(`update cart error: ${error.message}`);
    }
  }
  async deleteCart(id) {
    try {
      const result = await this.model.findByIdAndDelete(id);
      if (!result) {
        throw new Error("cart not found");
      } else {
        return result;
      }
    } catch (error) {
      console.log(`delete cart error: ${error.message}`);
      throw new Error(`delete cart error: ${error.message}`);
    }
  }
}
