import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/interfaces/products';
import { FormGroup, FormsModule, FormBuilder , ReactiveFormsModule} from '@angular/forms';

interface CartItem {
  product: Product;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  showForm: boolean = false;
  formData = { cupon: '', email: '' };
  formulario: FormGroup;

  constructor(
    private cartService: CartService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.loadCart();
    
  }

  loadCart() {
    this.cartItems = this.cartService.getCart();
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
    this.loadCart();
  }

  updateQuantity(productId: number, event: any) {
    const quantity = event.target.value;
    this.cartService.updateQuantity(productId, quantity);
    this.loadCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.loadCart();
  }

  toggleForm() {
    this.showForm = !this.showForm;
    this.formData.cupon = '';
    this.formData.email = '';
    this.formulario.reset();
  }

  submitForm() {
    console.log('Formulario enviado:', this.formData);
    alert('Formulario enviado con éxito');
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.product.value * item.quantity, 0);
  }
  
  increaseQuantity(productId: number): void {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item) {
      item.quantity++;
    }
  }
  
  decreaseQuantity(productId: number): void {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item && item.quantity > 1) {
      item.quantity--;
    }
  }
  
}
