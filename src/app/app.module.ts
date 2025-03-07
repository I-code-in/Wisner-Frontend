import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './pages/footer/footer.component';
import { SuscripcionService } from './services/subscription.service';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppComponent,
    FooterComponent
  ],
  providers: [
    SuscripcionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}