// import { Component } from '@angular/core';

// @Component({
//   selector: 'mc-register',
//   templateUrl: './register.component.html',
//   standalone: true,
// })
// export class RegisterComponent {

// }

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { BackendErrorComponent } from '../../shared/components/backendError.component';
import { authActions } from '../store/actions';
import { selectIsSubmitting, selectValidationErrors } from '../store/reducers';
// import { AuthStateInterface } from '../types/authState.interface';
import { AuthService } from '../services/auth.service';
// import {selectIsSubmitting, selectValidationErrors} from '../../store/reducers'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule, BackendErrorComponent],
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  isSubmitting$ = this.store.select(selectIsSubmitting);
  backendErrors$ = this.store.select(selectValidationErrors);
  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  });

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) {}

  onSubmit() {
    // console.log('form', this.form.getRawValue());
    const request: RegisterRequestInterface = {
      user: this.form.getRawValue(),
    };
    this.store.dispatch(authActions.register({ request }));
    // this.authService.register(request).subscribe(res => console.log('res ', res));
    this.authService.register(request).subscribe(res => res);
  }
}
