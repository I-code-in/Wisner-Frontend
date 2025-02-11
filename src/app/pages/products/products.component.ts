import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { type products } from 'src/app/interfaces/products';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  imageString: string = 'data:image/jpeg;base64,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'
  products: products = {
    page: 1,
    maxpage: 2,
    count: 12,
    products: [
      {
        name: 'Wisner chocolate 1',
        value: 10000,
        description: 'Wisner chocolate',
        code: 'x65z1',
        image: this.imageString,
        ingredients: 'chocolate 80%'
      },
      {
        name: 'Wisner chocolate 1',
        value: 10000,
        description: 'Wisner chocolate',
        code: 'x65z1',
        image: this.imageString,
        ingredients: 'chocolate 80%'
      },
      {
        name: 'Wisner chocolate 1',
        value: 10000,
        description: 'Wisner chocolate',
        code: 'x65z1',
        image: this.imageString,
        ingredients: 'chocolate 80%'
      },
      {
        name: 'Wisner chocolate 1',
        value: 10000,
        description: 'Wisner chocolate',
        code: 'x65z1',
        image: this.imageString,
        ingredients: 'chocolate 80%'
      },
      {
        name: 'Wisner chocolate 1',
        value: 10000,
        description: 'Wisner chocolate',
        code: 'x65z1',
        image: this.imageString,
        ingredients: 'chocolate 80%'
      },
      {
        name: 'Wisner chocolate 1',
        value: 10000,
        description: 'Wisner chocolate',
        code: 'x65z1',
        image: this.imageString,
        ingredients: 'chocolate 80%'
      },
      {
        name: 'Wisner chocolate 1',
        value: 10000,
        description: 'Wisner chocolate',
        code: 'x65z1',
        image: this.imageString,
        ingredients: 'chocolate 80%'
      },
      {
        name: 'Wisner chocolate 1',
        value: 10000,
        description: 'Wisner chocolate',
        code: 'x65z1',
        image: this.imageString,
        ingredients: 'chocolate 80%'
      },
    ]
  }
  modalData: any = null;
  constructor(private modalService: NgbModal) {}
  openModal(content: any, datos: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.modalData = datos;
  }
}
