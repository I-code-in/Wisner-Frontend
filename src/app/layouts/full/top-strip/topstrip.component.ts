import { Component, ViewEncapsulation  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-topstrip',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './topstrip.component.html',
    styleUrl: './topstrip.component.scss',
    encapsulation: ViewEncapsulation.None,
})

export class AppTopstripComponent {
    isSearchActive: boolean = false;
    constructor() {};
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
}
