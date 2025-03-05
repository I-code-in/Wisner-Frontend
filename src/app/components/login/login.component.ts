import { Component, Output, EventEmitter, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  user: string;
  @Output() refreshRequested = new EventEmitter<void>();
  @Input() register = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService,
    private modalService: NgbModal
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) return;
    if (this.register){
      this.authService.register(this.loginForm.value).subscribe({
        next: (response) => {
          console.log(response)
          localStorage.setItem('token', response.access_token);
          localStorage.setItem('username', this.loginForm.value.username);
          this.refreshRequested.emit();
          this.toastService.showToast('Usuario creado correctamente', true)
          this.modalService.dismissAll()
        },
        error: (err) => {
          this.errorMessage = 'Usuario o contraseña incorrectos';
          console.log(err)
          this.toastService.showToast(err.error.detail, false)
        }
      });
    } else {
        this.authService.login(this.loginForm.value).subscribe({
          next: (response) => {
            console.log(response)
            localStorage.setItem('token', response.access_token);
            localStorage.setItem('username', this.loginForm.value.username);
            this.refreshRequested.emit();
            this.toastService.showToast('Bienvenido', true)
            this.modalService.dismissAll()
          },
          error: (err) => {
            this.errorMessage = 'Usuario o contraseña incorrectos';
            console.log(err)
            this.toastService.showToast(err.error.detail, false)
          }
        });
      }
    }
}