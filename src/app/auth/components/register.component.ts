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
// import {BacknedErrorMessages} from 'src/app/shared/components/backendErrorMessages/backendErrorMessages.component';
import { authActions } from '../store/actions';
import { selectIsSubmitting } from '../store/reducers';
import { AuthStateInterface } from '../types/authState.interface';
import { AuthService } from '../services/auth.service';
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
    email: ['', Validators.required],
    password: ["", Validators.required],
  });

  isSubmitting$ = this.store.select(selectIsSubmitting);
  // data$ = combineLatest({
  //   isSubmitting: this.store.select(selectIsSubmitting),
  //   backendErrors: this.store.select(selectValidationErrors),
  // })

  constructor(
    private fb: FormBuilder,
    private store: Store<{ auth: AuthStateInterface }>,
    private authService: AuthService,
  ) { }

  onSubmit() {
    console.log('form', this.form.getRawValue())
    const request: RegisterRequestInterface = {
      user: this.form.getRawValue(),
    }
    this.store.dispatch(authActions.register({ request }));
    this.authService.register(request).subscribe((res) => console.log('res ', res));
  }
}

