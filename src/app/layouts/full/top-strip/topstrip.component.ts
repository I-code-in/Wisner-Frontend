import { Component, ViewEncapsulation  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-topstrip',
    standalone: true,
    imports: [CommonModule, CartComponent],
    templateUrl: './topstrip.component.html',
    styleUrl: './topstrip.component.scss',
    encapsulation: ViewEncapsulation.None,
})

export class AppTopstripComponent {
    isSearchActive: boolean = false;
    constructor(private modalService: NgbModal) {};
    toggleSearch(): void {
        this.isSearchActive = !this.isSearchActive;
    };

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

    openModal(content: any) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl' });
      }
}
