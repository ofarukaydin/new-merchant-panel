import { createSlice, AnyAction, SerializedError } from '@reduxjs/toolkit';
import { ResponseModel, IAuthState, IApi } from 'Redux/Helpers/IApi';
import { endpoints } from 'Redux/Helpers/Endpoints';
import { generateThunk } from 'Util/Api';
import { thunkActionTypes, sliceNames } from 'Redux/Helpers/Enums';

const INITIAL_STATE: IAuthState = {
  validateUser: ResponseModel,
  userDetails: ResponseModel,
  registerUser: ResponseModel,
  createForgetPasswordRequest: ResponseModel,
  validateForgetPasswordRequest: ResponseModel,
  updateForgetPasswordRequest: ResponseModel,
};

export const verifyUser = generateThunk<
  IApi['ValidateUserRequestDTO'],
  IApi['ValidateUserResponseDTOOperationResultDTO']
>({ url: endpoints.auth.validateUser, method: 'POST', actionType: thunkActionTypes.validateUser });

export const getUserDetails = generateThunk<
  undefined,
  IApi['GetUserDetailsResponseDTOOperationResultDTO']
>({ url: endpoints.auth.userDetails, method: 'GET', actionType: thunkActionTypes.userDetails });

export const createForgotPassword = generateThunk<
  IApi['CreateForgetPasswordRequestDTO'],
  IApi['OperationResultDTO']
>({
  url: endpoints.auth.createForgetPasswordRequest,
  method: 'POST',
  actionType: thunkActionTypes.createForgetPasswordRequest,
});

export const validateForgotPassword = generateThunk<
  IApi['ValidateForgetPasswordRequestDTO'],
  IApi['OperationResultDTO']
>({
  url: endpoints.auth.validateForgetPasswordRequest,
  method: 'POST',
  actionType: thunkActionTypes.validateForgetPasswordRequest,
});

export const updateForgetPassword = generateThunk<
  IApi['ChangeForgetPasswordRequestDTO'],
  IApi['OperationResultDTO']
>({
  url: endpoints.auth.updateForgetPasswordRequest,
  method: 'POST',
  actionType: thunkActionTypes.updateForgetPasswordRequest,
});

const AuthSlice = createSlice({
  name: sliceNames.auth,
  initialState: INITIAL_STATE,
  reducers: {
    setToken: (state, action) => {
      state.validateUser.response!.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action: AnyAction): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith('auth') && action.type.endsWith('/fulfilled'),
      (state, action) => {
        const subSlice = action.type.split('/')[1] as keyof typeof endpoints.auth;

        state[subSlice] = action.payload;
        state[subSlice].loading = false;
      },
    );

    builder.addMatcher(
      (action: AnyAction): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith('auth') && action.type.endsWith('/pending'),
      (state, action) => {
        const subSlice = action.type.split('/')[1] as keyof typeof endpoints.auth;

        state[subSlice] = { ...INITIAL_STATE[subSlice] };
        state[subSlice].loading = true;
      },
    );

    builder.addMatcher(
      (action: AnyAction): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith('auth') && action.type.endsWith('/rejected'),
      (state, action) => {
        const subSlice = action.type.split('/')[1] as keyof typeof endpoints.auth;

        state[subSlice] = {
          ...state[subSlice],
          ...action.payload,
          loading: false,
        };
      },
    );
  },
});

export const { setToken } = AuthSlice.actions;

export default AuthSlice.reducer;
