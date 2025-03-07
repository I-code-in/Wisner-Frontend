import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactoService } from 'src/app/services/contacto.service';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactoService: ContactoService
  ) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\+?[0-9]\d{1,14}$/)]], 
      mensaje: ['', Validators.required]
    });
  }

  enviarFormulario() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched(); 
      return;
    }

    const datosFormulario = this.formulario.value;

    this.contactoService.postContacto(datosFormulario)
      .subscribe({
        next: response => {
          console.log('Formulario enviado con éxito:', response);
          alert('Formulario enviado con éxito.');
          this.formulario.reset();
        },
        error: error => {
          console.error('Error al enviar el formulario:', error);
          alert('Hubo un error al enviar el formulario.');
        }
      });
  }
}