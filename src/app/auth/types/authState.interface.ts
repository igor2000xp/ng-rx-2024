import { BackendErrorsInterface } from '../../shared/types/backendErrors.interface';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';

export interface AuthStateInterface {
  // isSubmitting is true when user is submitting the form till the time we get the response from the server
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null | undefined;
  isLoading: boolean;
  validationErrors: BackendErrorsInterface | null;
}
