import { createAsyncThunk } from '@reduxjs/toolkit';
import { OperationResultDTO, RequestParams } from 'Redux/Helpers/ApiTypes';
import { Api } from 'Redux/Helpers/ApiTypes';
import { getHeadersForFetch } from 'Util/Util';

export const GeneratedApi = new Api({
  baseUrl: process.env.REACT_APP_BACKEND_API_URL,
  baseApiParams: getHeadersForFetch(),
});

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
