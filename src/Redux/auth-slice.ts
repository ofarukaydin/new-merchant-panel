import { createSlice, AnyAction, SerializedError } from '@reduxjs/toolkit';
import { ResponseModel, IAuthState } from 'Redux/Helpers/state-types';
import { Api, generateThunk } from 'Util/api';
import { ThunkActionTypes, SliceNames } from 'Util/enums';

const initialState: IAuthState = {
  validateUser: ResponseModel,
  userDetails: ResponseModel,
  registerUser: ResponseModel,
  createForgetPasswordRequest: ResponseModel,
  validateForgetPasswordRequest: ResponseModel,
  updateForgetPasswordRequest: ResponseModel,
};

export const verifyUser = generateThunk(
  ThunkActionTypes.validateUser,
  Api.v1AuthenticationValidateuserCreate,
);

export const getUserDetails = generateThunk(
  ThunkActionTypes.userDetails,
  Api.v1AuthenticationGetuserdetailsList,
);

export const createForgotPassword = generateThunk(
  ThunkActionTypes.createForgetPasswordRequest,
  Api.v1AuthenticationCreateforgetpasswordrequestCreate,
);

export const validateForgotPassword = generateThunk(
  ThunkActionTypes.validateForgetPasswordRequest,
  Api.v1AuthenticationValidateforgetpasswordrequestCreate,
);

export const updateForgetPassword = generateThunk(
  ThunkActionTypes.updateForgetPasswordRequest,
  Api.v1AuthenticationUpdateforgetpasswordrequestUpdate,
);

const AuthSlice = createSlice({
  name: SliceNames.auth,
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.validateUser.response.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action: AnyAction): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith('auth') && action.type.endsWith('/fulfilled'),
      (state, action) => {
        const subSlice: keyof IAuthState = action.type.split('/')[1];
        state[subSlice] = { ...action.payload, loading: false };
      },
    );

    builder.addMatcher(
      (action: AnyAction): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith('auth') && action.type.endsWith('/pending'),
      (state, action) => {
        const subSlice: keyof IAuthState = action.type.split('/')[1];
        state[subSlice] = { ...action.payload, loading: true };
      },
    );

    builder.addMatcher(
      (action: AnyAction): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith('auth') && action.type.endsWith('/rejected'),
      (state, action) => {
        const subSlice: keyof IAuthState = action.type.split('/')[1];
        state[subSlice] = { ...action.payload, loading: false };
      },
    );
  },
});

export const { setToken } = AuthSlice.actions;

export const authSlice = AuthSlice.reducer;
