import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuponService {
  formulario: FormGroup;
  private apiUrl = environment.BACKEND;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    { 
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      cupon: ['', Validators.required],
    }); 
  }
}

postCupon(formulario: FormGroup): Observable<any> {
  if (formulario.invalid) {
    formulario.markAllAsTouched();
    return of({ error: 'Formulario inválido' }); 
  }

  const datosFormulario = formulario.value;
  
  return this.http.post(`${this.apiUrl}/coupons`, datosFormulario);
}
}
