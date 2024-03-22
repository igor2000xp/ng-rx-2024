import { createActionGroup, emptyProps, props } from '@ngrx/store';
// import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { BackendErrorsInterface } from '../../shared/types/backendErrors.interface';

// export const authActions = createActionGroup({
//   source: 'auth',
//   events: {
//     Register: props<{ request: RegisterRequestInterface }>(),
//     'Register success': props<{ currentUser: CurrentUserInterface }>(),
//     // 'Register failure': props<{ errors: BackendErrorsInterface }>(),
//     'Register failure': emptyProps(),
//   },
// })

// import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
// import { RegisterRequestInterface } from '../types/registerRequest.interface';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    'Register success': props<{ currentUser: CurrentUserInterface }>(),
    'Register failure': props<{ errors: BackendErrorsInterface }>(),
  },
});

// export const register = createAction('[Auth] Register');
// export const register = createAction(
//   '[Auth] Register',
//   props<{ request: RegisterRequestInterface }>(),
// );

// export const registerSuccess = createAction(
//   '[Auth] Register success',
//   props<{request: RegisterRequestInterface}>(),
// );

// export const registerFailure = createAction(
//   '[Auth] Register success',,
//   props<{request: RegisterRequestInterface}>(),
// );
