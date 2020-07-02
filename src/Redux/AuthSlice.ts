import { createSlice, createAsyncThunk, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ResponseModel, IAuthState, IApi } from 'Redux/Helpers/IApi';
import { endpoints } from 'Redux/Helpers/Endpoints';
import Api from 'Util/Api';
import { actionTypes, sliceNames } from 'Redux/Helpers/SliceTypes';

const INITIAL_STATE: IAuthState = {
  userDetail: ResponseModel,
  registerUser: ResponseModel,
  createForgotPassword: ResponseModel,
  validateForgotPassword: ResponseModel,
  updateForgotPassword: ResponseModel,
};

export const verifyUser = createAsyncThunk<
  IApi['ValidateUserResponseDTOOperationResultDTO'],
  IApi['ValidateUserRequestDTO'],
  {
    rejectValue: IApi['OperationResultDTO'];
  }
>(actionTypes.verifyUser, async (data, thunkAPI) => {
  try {
    const response = await Api.post<IApi['ValidateUserResponseDTOOperationResultDTO']>(
      endpoints.auth.validateUser,
      data,
    );

    if (!response.data.result) {
      return thunkAPI.rejectWithValue(response.data);
    }

    return response.data;
  } catch (err) {
    const error: AxiosError<IApi['OperationResultDTO']> = err;

    if (!error.response) {
      throw err;
    }

    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getUserDetails = createAsyncThunk<
  IApi['GetUserDetailsResponseDTOOperationResultDTO'],
  undefined,
  {
    rejectValue: IApi['OperationResultDTO'];
  }
>(actionTypes.getUserDetails, async (_, thunkAPI) => {
  try {
    const response = await Api.get<IApi['GetUserDetailsResponseDTOOperationResultDTO']>(
      endpoints.auth.userDetails,
    );

    if (!response.data.result) {
      return thunkAPI.rejectWithValue(response.data);
    }

    return response.data;
  } catch (err) {
    const error: AxiosError<IApi['OperationResultDTO']> = err;

    if (!error.response) {
      throw err;
    }

    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const createForgotPassword = createAsyncThunk<
  IApi['OperationResultDTO'],
  IApi['CreateForgetPasswordRequestDTO'],
  {
    rejectValue: IApi['OperationResultDTO'];
  }
>(actionTypes.createForgetPassword, async (data, thunkAPI) => {
  try {
    const response = await Api.post<IApi['OperationResultDTO']>(
      endpoints.auth.createForgetPasswordRequest,
      data,
    );

    if (!response.data.result) {
      return thunkAPI.rejectWithValue(response.data);
    }

    return response.data;
  } catch (err) {
    const error: AxiosError<IApi['OperationResultDTO']> = err;

    if (!error.response) {
      throw err;
    }
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const validateForgotPassword = createAsyncThunk<
  IApi['OperationResultDTO'],
  IApi['ValidateForgetPasswordRequestDTO'],
  {
    rejectValue: IApi['OperationResultDTO'];
  }
>(actionTypes.validateForgetPassword, async (data, thunkAPI) => {
  try {
    const response = await Api.post<IApi['OperationResultDTO']>(
      endpoints.auth.validateForgetPasswordRequest,
      data,
    );

    if (!response.data.result) {
      return thunkAPI.rejectWithValue(response.data);
    }

    return response.data;
  } catch (err) {
    const error: AxiosError = err;

    if (!error.response) {
      throw err;
    }

    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const updateForgetPassword = createAsyncThunk<
  IApi['OperationResultDTO'],
  IApi['UpdateOrderRequestDTO'],
  {
    rejectValue: IApi['OperationResultDTO'];
  }
>(actionTypes.updateForgetPassword, async (data, thunkAPI) => {
  try {
    const response = await Api.post<IApi['OperationResultDTO']>(
      endpoints.auth.updateForgetPasswordRequest,
      data,
    );

    if (!response.data.result) {
      return thunkAPI.rejectWithValue(response.data);
    }

    return response.data;
  } catch (err) {
    const error: AxiosError<IApi['OperationResultDTO']> = err;

    if (!error.response) {
      throw err;
    }

    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const AuthSlice = createSlice({
  name: sliceNames.auth,
  initialState: INITIAL_STATE,
  reducers: {
    setToken: (state, action) => {
      state.userDetail.response!.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(verifyUser.fulfilled, (state, action) => {
      state.userDetail = action.payload;
      state.userDetail.loading = false;
    });
    builder.addCase(verifyUser.rejected, (state, action) => {
      state.userDetail = {
        ...state.userDetail,
        ...action.payload,
        loading: false,
      };
    });

    builder.addCase(verifyUser.pending, (state, action) => {
      state.userDetail.loading = true;
    });

    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      const token = state.userDetail.response?.token;
      state.userDetail = action.payload;
      state.userDetail.loading = false;
      state.userDetail.response!.token = token;
    });

    builder.addCase(getUserDetails.rejected, (state, action) => {
      state.userDetail = {
        ...state.userDetail,
        ...action.payload,
        loading: false,
      };
    });
    builder.addCase(getUserDetails.pending, (state, action) => {
      state.userDetail.loading = true;
    });

    builder.addCase(createForgotPassword.fulfilled, (state, action) => {
      state.userDetail = {
        ...state.userDetail,
        ...action.payload,
        loading: false,
      };
    });
    builder.addCase(createForgotPassword.rejected, (state, action) => {
      state.userDetail = {
        ...state.userDetail,
        ...action.payload,
        loading: false,
      };
    });
    builder.addCase(createForgotPassword.pending, (state, action) => {
      state.userDetail.loading = true;
    });

    builder.addCase(updateForgetPassword.fulfilled, (state, action) => {
      state.userDetail = {
        ...state.userDetail,
        ...action.payload,
        loading: false,
      };
    });
    builder.addCase(updateForgetPassword.rejected, (state, action) => {
      state.userDetail = {
        ...state.userDetail,
        ...action.payload,
        loading: false,
      };
    });
    builder.addCase(updateForgetPassword.pending, (state, action) => {
      state.userDetail.loading = true;
    });

    builder.addCase(validateForgotPassword.fulfilled, (state, action) => {
      state.userDetail = {
        ...state.userDetail,
        ...action.payload,
        loading: false,
      };
    });
    builder.addCase(validateForgotPassword.rejected, (state, action) => {
      state.userDetail = {
        ...state.userDetail,
        ...action.payload,
        loading: false,
      };
    });
    builder.addCase(validateForgotPassword.pending, (state, action) => {
      state.userDetail.loading = true;
    });
  },
});

/* const setData = (thunk, builder: ActionReducerMapBuilder<typeof thunk>) => {
  builder.addCase(verifyUser.fulfilled, (state, action) => {
    state.userDetail = {
      ...state.userDetail,
      ...action.payload,
      loading: false,
    };
  });
  builder.addCase(verifyUser.rejected, (state, action) => {
    state.userDetail = {
      ...state.userDetail,
      ...action.payload,
      loading: false,
    };
  });
  builder.addCase(verifyUser.pending, (state, action) => {
    state.userDetail.loading = true;
  });
};
 */

export const { setToken } = AuthSlice.actions;

export default AuthSlice.reducer;
