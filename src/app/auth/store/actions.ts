import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/auth.responce.interface';

// export const register = createAction('[Auth] Register');


export const register = createAction(
  '[Auth] Register',
   props<{request: RegisterRequestInterface}>(),
);
