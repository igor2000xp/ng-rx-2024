// import { Component } from '@angular/core';

// @Component({
//   selector: 'mc-register',
//   templateUrl: './register.component.html',
//   standalone: true,
// })
// export class RegisterComponent {

// }

import {CommonModule} from '@angular/common'
import {Component} from '@angular/core'
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
import {RouterLink} from '@angular/router'
import {Store} from '@ngrx/store'
import {combineLatest} from 'rxjs'
import { RegisterRequestInterface } from '../types/auth.responce.interface'
// import {BacknedErrorMessages} from 'src/app/shared/components/backendErrorMessages/backendErrorMessages.component'
import { register } from '../store/actions'
// import {selectIsSubmitting, selectValidationErrors} from '../../store/reducers'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CommonModule,
    // BacknedErrorMessages,
  ],
})
export class RegisterComponent {
    form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    password: ["",Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)],
  });
  // data$ = combineLatest({
  //   isSubmitting: this.store.select(selectIsSubmitting),
  //   backendErrors: this.store.select(selectValidationErrors),
  // })

  constructor(
    private fb: FormBuilder, 
    private store: Store,
    ) {}

  onSubmit() {
    console.log('form', this.form.getRawValue())
    const request: RegisterRequestInterface = {
      user: this.form.getRawValue(),
    }
    this.store.dispatch(register({request}));
  }
}

