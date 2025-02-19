import { Injectable } from '@angular/core';
import { Product } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartKey = 'shopping_cart';

  constructor() { }

  getCart(): { product: Product; quantity: number }[] {
    const cart = localStorage.getItem(this.cartKey);
    return cart ? JSON.parse(cart) : [];
  }

  addToCart(product: Product, quantity: number = 1): void {
    let cart = this.getCart();
    const index = cart.findIndex((item) => item.product.id === product.id);

    if (index > -1) {
      cart[index].quantity += quantity;

      if (cart[index].quantity <= 0) {
        this.removeFromCart(product.id)
        return;
      }
    } else {
      cart.push({ product, quantity });
    }

    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  removeFromCart(productId: number): void {
    let cart = this.getCart().filter((item) => item.product.id !== productId);
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  updateQuantity(productId: number, quantity: number): void {
    let cart = this.getCart();
    const index = cart.findIndex((item) => item.product.id === productId);

    if (index > -1) {
      cart[index].quantity = quantity;
      if (quantity <= 0) {
        this.removeFromCart(productId)
        return;
      }
    }
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  clearCart(): void {
    localStorage.removeItem(this.cartKey);
  }

  getQuantity(product: Product): number {
    let cart = this.getCart();
    const index = cart.findIndex((item) => item.product.id === product.id);
    if (index > -1) {
      return cart[index].quantity
    }
    else
      return 0;
  }
}
