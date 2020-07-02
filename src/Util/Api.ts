import axios, { AxiosResponse, AxiosError } from 'axios';
import { IApi } from 'Redux/Helpers/IApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from 'Redux/Helpers/SliceTypes';

const Api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL,
  responseType: 'json',
});

export const generateThunk = <RequestDTO, ResponseDTO extends IApi['OperationResultDTO']>(options: {
  url: string;
  data?: RequestDTO | null | undefined;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
}) => {
  return createAsyncThunk<
    ResponseDTO,
    RequestDTO,
    {
      rejectValue: IApi['OperationResultDTO'];
    }
  >(actionTypes.getUserDetails, async (data, thunkAPI) => {
    try {
      const response: AxiosResponse<ResponseDTO> = await Api(options);

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
};

export default Api;
