import { Component, ViewEncapsulation, Input, viewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ToastService } from 'src/app/services/toast.service';
import { CuponService } from 'src/app/services/cupon.service';

@Component({
    selector: 'app-topstrip',
    standalone: true,
    imports: [CommonModule, CartComponent, LoginComponent, ReactiveFormsModule],
    templateUrl: './topstrip.component.html',
    styleUrl: './topstrip.component.scss',
    encapsulation: ViewEncapsulation.None,
})

export class AppTopstripComponent {
    @ViewChild('carrito') carritoModal: TemplateRef<any>;
    showForm: boolean = true;
    formulario: FormGroup;

    isSearchActive: boolean = false;
    username: string | null = null;
    menuOpen = false;

    constructor(
        private modalService: NgbModal,
        private cartService: CartService,
        private toastService: ToastService,
        private fb: FormBuilder,
        private cuponService: CuponService
    ) {
        this.formulario = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            cupon: ['', Validators.required]
    });
    }
    toggleSearch(): void {
        this.isSearchActive = !this.isSearchActive;
    };

    ngOnInit() {
        this.loadUser();
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }
      
    scrollToComponent(targetId: string): void {
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = (13 / 100) * window.innerHeight; // 13 equivale al 13% de la pantalla
            //const offset = 10
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth', // Desplazamiento suave
            });
        }
    }

    openModal(content: any, size: string = 'xl') {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: size });
    }

    loadUser() {
        this.username = localStorage.getItem('username');
        console.log(this.username)
    }

    logout() {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        this.username = null;
    }

    refreshData() {
        // Lógica para refrescar los datos o actualizar el estado
        this.loadUser();
      }

    gopenModal() {
        this.modalService.open(this.carritoModal);
      }
    
      validarCupon() {
        this.cuponService.postCupon(this.formulario)
          .subscribe({
            next: response => {
              if (response.error) {
                this.toastService.showToast('Por favor, complete correctamente el formulario.', false);
                return;
              }
              this.toastService.showToast('Cupón aplicado con éxito.', true);
              this.formulario.reset();
            },
            error: error => {
              this.toastService.showToast('Hubo un error al aplicar el cupón.', false);
            }
        });
}
}