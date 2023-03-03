import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  emailCheck= '^[a-z0-9._*+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$';

  emailReq() {
    return this.miFormulario.controls['username']?.errors?.['required'] &&
      this.miFormulario.controls['username']?.touched;
  }

  emailPattern() {
    return this.miFormulario.controls['username']?.errors?.['pattern'] &&
      this.miFormulario.controls['username']?.touched;
  }

  miFormulario: FormGroup = this.fb.group({
    username: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
    password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(255)]],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.miFormulario.setValue({
      username: '',
      password: ''
    });
  }
  campoValido(campo: string) {
    return this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched;
  }
  save() {
    console.log(this.miFormulario.value);
    this.router.navigate(['/home']);
  }
}
