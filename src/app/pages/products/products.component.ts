import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { type ProductPaginate, type Product, type Ingredients } from 'src/app/interfaces/products';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  modalData: any = null;
  modalIngredients: Ingredients[];
  constructor(
    private modalService: NgbModal,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }
  productsPaginate: ProductPaginate;
  products: Product[];
  fetchProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.productsPaginate = data;
        this.products = this.productsPaginate.items // Asigna los productos a la variable local
        console.log('Productos obtenidos:', data);
      },
      error: (error) => {
        console.error('Error al obtener productos:', error);
      }
    });
  }

  fetchIngredients(id: number): void {
    this.productService.getIngredientsById(id).subscribe({
      next: (data) => {
        this.modalIngredients = data
        console.log('Ingredientes obtenidos:', data);
      },
      error: (error) => {
        console.error('Error al obtener ingredientes:', error);
      }
    });
  }

  openModal(content: any, datos: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' });
    this.modalData = datos;
    this.fetchIngredients(datos.id)
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  removeFromCart(product: Product, quantity: number = -1) {
    this.cartService.addToCart(product, quantity);
  }

  deleteFromCart(product: Product) {
    this.cartService.removeFromCart(product.id);
  }

  getQuantity(product: Product): number {
    return this.cartService.getQuantity(product);
  }
}
