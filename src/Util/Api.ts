import axios, { AxiosResponse, AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { OperationResultDTO } from 'Redux/Helpers/ApiTypes';

const Api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL,
  responseType: 'json',
});

export const generateThunk = <RequestDTO, ResponseDTO extends OperationResultDTO>(options: {
  actionType: string;
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
}) => {
  return createAsyncThunk<
    ResponseDTO,
    RequestDTO,
    {
      rejectValue: OperationResultDTO;
    }
  >(options.actionType, async (data, thunkAPI) => {
    try {
      const response: AxiosResponse<ResponseDTO> = await Api({ ...options, data });

      if (!response.data.result) {
        return thunkAPI.rejectWithValue(response.data);
      }

      return response.data;
    } catch (err) {
      const error: AxiosError<OperationResultDTO> = err;

      if (!error.response) {
        throw err;
      }

      const constructedErrorMessage = {
        result: false,
        messages: [{ code: error.code, message: error.message }],
      };

      return thunkAPI.rejectWithValue(constructedErrorMessage);
    }
  });
};

export default Api;
