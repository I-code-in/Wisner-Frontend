import { Component } from '@angular/core';
import { SubscriptionService } from 'src/app/services/subscription.service';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from 'src/app/services/toast.service';


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

  constructor(
    private suscripcionService: SubscriptionService,
    private toastService: ToastService
  ) {}

  subscribe() {
    if (!this.email || !this.email.includes('@')) {
      this.toastService.showToast('Por favor ingresa un correo electrónico válido.',false)
      return;
    }
    this.suscripcionService.suscribirse(this.email).subscribe({
      next: (response) => {
        this.toastService.showToast('¡Gracias por suscribirte!',true)
      },
      error: (error) => {
        console.log(error);
        this.toastService.showToast(error.error.detail,false)
      }
    });
  }
}


