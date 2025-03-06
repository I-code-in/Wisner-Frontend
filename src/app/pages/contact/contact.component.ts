import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], 
      mensaje: ['', Validators.required]
    });
  }

  enviarFormulario() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched(); 
      return;
    }

    const datosFormulario = this.formulario.value;

    this.http.post('http://127.0.0.1:8000/contacto', datosFormulario)
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