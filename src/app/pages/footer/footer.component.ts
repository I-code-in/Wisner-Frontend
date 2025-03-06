import { Component } from '@angular/core';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-footer',
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
  constructor(private subscriptionService: SubscriptionService) {}
  subscribe() {
    if (!this.email.includes('@')) {
      alert('Ingrese un correo válido');
      return;
    }

    this.subscriptionService.subscribe(this.email).subscribe({
      next: (response) => {
        alert('¡Gracias por suscribirte!');
      },
      error: (error) => {
        alert('Hubo un error al suscribirse. Intenta de nuevo.');
      }
    });    
  }
}

