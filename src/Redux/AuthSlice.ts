import { createSlice, AnyAction, SerializedError, PayloadAction } from '@reduxjs/toolkit';
import { ResponseModel, IApi, IAuthState } from 'Redux/Helpers/IApi';
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
    setDefault: (
      state,
      action: PayloadAction<{ subSlice: keyof IAuthState; fieldsToReset: string[] }>,
    ) => {
      /*       const subSlice: keyof IAuthState = action.payload.subSlice;
      const fieldsToReset: string[] = action.payload.fieldsToReset;

      if (!action.payload.fieldsToReset) {
        state[subSlice] = INITIAL_STATE[subSlice];
      } else {
        fieldsToReset.forEach((field) => {
          state[subSlice][field] = INITIAL_STATE[subSlice][field];
        });
      } */
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action: AnyAction): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith('auth') && action.type.endsWith('/fulfilled'),
      (state, action) => {
        const subSlice = action.type.split('/')[1] as keyof IAuthState;

        state[subSlice] = action.payload;
        state[subSlice].loading = false;
      },
    );

    builder.addMatcher(
      (action: AnyAction): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith('auth') && action.type.endsWith('/pending'),
      (state, action) => {
        const subSlice = action.type.split('/')[1] as keyof IAuthState;

        state[subSlice] = { ...INITIAL_STATE[subSlice] };
        state[subSlice].loading = true;
      },
    );

    builder.addMatcher(
      (action: AnyAction): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith('auth') && action.type.endsWith('/rejected'),
      (state, action) => {
        const subSlice = action.type.split('/')[1] as keyof IAuthState;

        state[subSlice] = action.payload;
        state[subSlice].loading = false;
      },
    );
  },
});

export const { setToken, setDefault } = AuthSlice.actions;

export default AuthSlice.reducer;
