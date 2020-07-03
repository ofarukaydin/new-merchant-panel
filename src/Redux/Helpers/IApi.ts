import { components } from './interfaces';

export type IApi = components['schemas'];

export interface IResponse<T> {
  response?: T | null;
  loading?: Boolean;
  messages?: IApi['OperationResultMessage'][] | null;
  result?: boolean;
}

export const ResponseModel = {
  response: {},
  loading: false,
  messages: [],
  result: false,
};

export interface IAuthState {
  validateUser: IResponse<IApi['ValidateUserResponseDTO']>;
  registerUser: IResponse<IApi['RegisterUserResponseDTO']>;
  userDetails: IResponse<IApi['GetUserDetailsResponseDTO']>;
  createForgetPasswordRequest: IResponse<IApi['OperationResultDTO']>;
  validateForgetPasswordRequest: IResponse<IApi['OperationResultDTO']>;
  updateForgetPasswordRequest: IResponse<IApi['OperationResultDTO']>;
}
