import { createAsyncThunk } from '@reduxjs/toolkit';
import { RequestParams, OperationResultDTO } from 'Redux/Helpers/ApiTypes';
import { Api } from 'Redux/Helpers/ApiTypes';
import { getHeadersForFetch } from 'Util/Util';

export const GeneratedApi = new Api({
  baseUrl: process.env.REACT_APP_BACKEND_API_URL,
});

export const withAuth = async <RequestDTO, ResponseDTO extends OperationResultDTO>(
  fetchFn: (data: RequestDTO, params?: RequestParams) => Promise<ResponseDTO>,
  data: RequestDTO,
  params?: RequestParams,
): Promise<ResponseDTO> => {
  const response = await fetchFn(data, { ...params, ...getHeadersForFetch() });

  return response;
};

export const generateThunk = <RequestDTO, ResponseDTO extends OperationResultDTO>(
  actionType: string,
  fetchFn: (data: RequestDTO, params?: RequestParams) => Promise<ResponseDTO>,
) => {
  const thunk = createAsyncThunk<
    ResponseDTO,
    RequestDTO,
    {
      rejectValue: OperationResultDTO;
    }
  >(actionType, async (data, thunkAPI) => {
    try {
      const response = await fetchFn(data, getHeadersForFetch());

      if (!response.result) {
        return thunkAPI.rejectWithValue(response);
      }

      return response;
    } catch (error) {
      const constructedErrorMessage = {
        result: false,
        messages: [{ code: '600', message: 'Bir hata oluştu' }],
      };

      return thunkAPI.rejectWithValue(constructedErrorMessage);
    }
  });
  return thunk;
};

export default GeneratedApi.api;
