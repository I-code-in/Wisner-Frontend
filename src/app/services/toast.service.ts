import { Injectable } from '@angular/core';
import { Toast } from 'bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastContainer!: HTMLElement;

  constructor() { 
    this.createToastContainer();
  }

  private createToastContainer() {
    this.toastContainer = document.createElement('div');
    this.toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    document.body.appendChild(this.toastContainer);
  }

  showToast(message: string, isSuccess: boolean = true) {
    const toastElement = document.createElement('div');
    toastElement.className = `toast align-items-center text-white ${isSuccess ? 'bg-success' : 'bg-danger'} border-0`;
    toastElement.setAttribute('role', 'alert');
    toastElement.setAttribute('aria-live', 'assertive');
    toastElement.setAttribute('aria-atomic', 'true');

    toastElement.innerHTML = `
      <div class="d-flex">
        <div class="toast-body">${message}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>
    `;

    this.toastContainer.appendChild(toastElement);

    // Inicializar y mostrar el toast
    const toastInstance = new Toast(toastElement, { animation: true, delay: 3000 });
    toastInstance.show();

    // Eliminar el toast cuando termine su animación
    toastElement.addEventListener('hidden.bs.toast', () => {
      toastElement.remove();
    });
  }
}
