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
  userDetail: IResponse<IApi['ValidateUserResponseDTO']>;
  registerUser: IResponse<IApi['RegisterUserResponseDTO']>;
  createForgotPassword: IResponse<IApi['OperationResultDTO']>;
  validateForgotPassword: IResponse<IApi['OperationResultDTO']>;
  updateForgotPassword: IResponse<IApi['OperationResultDTO']>;
}
