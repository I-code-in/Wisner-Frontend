import { Component } from '@angular/core';
import { FlyersComponent } from '../flyers/flyers.component';
import { ProductsComponent } from '../products/products.component';
import { WhoWeAreComponent } from '../who-we-are/who-we-are.component';
import { TourComponent } from '../tour/tour.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    FlyersComponent,
    ProductsComponent,
    WhoWeAreComponent,
    TourComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
