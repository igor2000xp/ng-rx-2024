// import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import { CurrentUserInterface } from '../../shared/types/currentUser.interface'

export interface AuthStateInterface {
  isSubmitting: boolean; //isSubmitting is true when user is submitting the form till the time we get the response from the server
  // currentUser: CurrentUserInterface | null | undefined
  // isLoading: boolean
  // validationErrors: BackendErrorsInterface | null
}
