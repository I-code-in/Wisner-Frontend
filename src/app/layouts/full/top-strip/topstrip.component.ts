import { Component, ViewEncapsulation  } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
    selector: 'app-topstrip',
    imports: [TablerIconsModule, MatButtonModule, MatMenuModule],
    templateUrl: './topstrip.component.html',
    styleUrl: './topstrip.component.scss',
    encapsulation: ViewEncapsulation.None,
})
export class AppTopstripComponent {
    constructor() { }

}
