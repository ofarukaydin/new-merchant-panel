import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { sliceNames } from "./Helpers/SliceTypes";

export interface IButtonState {
    isActive: boolean,
    isFulfilled: boolean,
    error: string | any
}

const initialState: IButtonState = {
    isActive: false,
    isFulfilled: false,
    error: null
};

export const testAsyncThunk = createAsyncThunk(
    'button/fetchClicked',
    async (isResolved: boolean, thunkAPI) => {
        try {
            const promise: Promise<{ data: boolean }> = new Promise((resolve, reject) => {
                setTimeout(() => isResolved ? resolve({ data: true }) : reject({ data: false }), 3000)
            })
            const response = await promise
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue('rejected')

        }
    })

export const slice = createSlice({
    name: sliceNames.buttonSlice,
    initialState,
    reducers: {
        setButtonStatus: (state, action: PayloadAction<any>) => {
            state.isActive = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(testAsyncThunk.fulfilled, (state, action) => {
            state.isFulfilled = action.payload
        })
        builder.addCase(testAsyncThunk.rejected, (state, action) => {
            state.error = action.error

        })
    }
});

export const {
    setButtonStatus
} = slice.actions;


export default slice.reducer;
