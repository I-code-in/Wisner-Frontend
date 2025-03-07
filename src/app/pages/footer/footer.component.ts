import { Component } from '@angular/core';
import { SuscripcionService } from '/home/maria/Wisner-proyecto/Wisner-Frontend/src/app/services/subscription.service';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth'});
  
    };
  }
  email: string = '';
  mensajeError: string = '';  

  constructor(private SuscripcionService: SuscripcionService) {}

  subscribe() {
    if (!this.email || !this.email.includes('@')) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }
    this.SuscripcionService.suscribirse(this.email).subscribe({
      next: (response) => {
        alert('¡Gracias por suscribirte!');
      },
      error: (error:HttpErrorResponse) => {
        this.mensajeError = error.message;  
      }
    });
  }
}


