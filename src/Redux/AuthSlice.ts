import {
  createSlice,
  AnyAction,
  SerializedError,
  PayloadAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { ResponseModel, IAuthState } from 'Redux/Helpers/StateTypes';
import Api, { generateThunk } from 'Util/Api';
import { thunkActionTypes, sliceNames } from 'Redux/Helpers/Enums';

const initialState: IAuthState = {
  validateUser: ResponseModel,
  userDetails: ResponseModel,
  registerUser: ResponseModel,
  createForgetPasswordRequest: ResponseModel,
  validateForgetPasswordRequest: ResponseModel,
  updateForgetPasswordRequest: ResponseModel,
};

export const verifyUser = generateThunk(
  thunkActionTypes.validateUser,
  Api.v1AuthenticationValidateuserCreate,
);

export const getUserDetails = generateThunk(
  thunkActionTypes.userDetails,
  Api.v1AuthenticationGetuserdetailsList,
);

export const createForgotPassword = generateThunk(
  thunkActionTypes.createForgetPasswordRequest,
  Api.v1AuthenticationCreateforgetpasswordrequestCreate,
);

export const validateForgotPassword = generateThunk(
  thunkActionTypes.validateForgetPasswordRequest,
  Api.v1AuthenticationValidateforgetpasswordrequestCreate,
);

export const updateForgetPassword = generateThunk(
  thunkActionTypes.updateForgetPasswordRequest,
  Api.v1AuthenticationUpdateforgetpasswordrequestUpdate,
);

export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, { getState, requestId }) => {
    const response = await Api.v1AuthenticationValidateuserCreate({});
    return response;
  },
);

const AuthSlice = createSlice({
  name: sliceNames.auth,
  initialState: initialState,
  reducers: {
    setToken: (state, action) => {
      state.validateUser.response!.token = action.payload;
    },
    setDefault: (
      state,
      action: PayloadAction<{
        subSlice: keyof IAuthState;
        fieldsToReset: IAuthState[keyof IAuthState]['response'];
      }>,
    ) => {
      /*    const subSlice: keyof IAuthState = action.payload.subSlice;
      const fieldsToReset = action.payload.fieldsToReset;

      if (!action.payload.fieldsToReset) {
        state[subSlice] = initialState[subSlice];
      } else {
        fieldsToReset.forEach((field) => {
          state[subSlice][field] = initialState[subSlice][field];
        });
      }  */
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action: AnyAction): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith('auth') && action.type.endsWith('/fulfilled'),
      (state, action) => {
        const subSlice: keyof IAuthState = action.type.split('/')[1];

        state[subSlice] = action.payload;
        state[subSlice].loading = false;
      },
    );

    builder.addMatcher(
      (action: AnyAction): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith('auth') && action.type.endsWith('/pending'),
      (state, action) => {
        const subSlice: keyof IAuthState = action.type.split('/')[1];

        state[subSlice] = { ...initialState[subSlice] };
        state[subSlice].loading = true;
      },
    );

    builder.addMatcher(
      (action: AnyAction): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith('auth') && action.type.endsWith('/rejected'),
      (state, action) => {
        const subSlice: keyof IAuthState = action.type.split('/')[1];

        state[subSlice] = action.payload;
        state[subSlice].loading = false;
      },
    );
  },
});

export const { setToken, setDefault } = AuthSlice.actions;

export default AuthSlice.reducer;
