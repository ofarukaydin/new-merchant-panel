import {
  ValidateUserResponseDTO,
  RegisterUserResponseDTO,
  GetUserDetailsResponseDTO,
  OperationResultDTO,
  OperationResultMessage,
} from 'Redux/Helpers/ApiTypes';

export interface IResponse<T> {
  response?: T | null;
  loading?: Boolean;
  messages?: OperationResultMessage[] | null;
  result?: boolean;
}

export const ResponseModel = {
  response: {},
  loading: false,
  messages: [{}],
  result: false,
};

export interface IAuthState {
  validateUser: IResponse<ValidateUserResponseDTO>;
  registerUser: IResponse<RegisterUserResponseDTO>;
  userDetails: IResponse<GetUserDetailsResponseDTO>;
  createForgetPasswordRequest: IResponse<OperationResultDTO>;
  validateForgetPasswordRequest: IResponse<OperationResultDTO>;
  updateForgetPasswordRequest: IResponse<OperationResultDTO>;
}
