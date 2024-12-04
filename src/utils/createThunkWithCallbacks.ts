import { createAsyncThunk } from "@reduxjs/toolkit";

interface ThunkCallbacks<ReturnType> {
  onSuccess?: (response: ReturnType) => void;
  onError?: (error: any) => void;
}

interface ThunkArgsWithCallbacks<Args, ReturnType>
  extends ThunkCallbacks<ReturnType> {
  args: Args;
}

export function createThunkWithCallbacks<ReturnType, ThunkArgs>(
  typePrefix: string,
  asyncFunction: (args: ThunkArgs, thunkAPI: any) => Promise<ReturnType>
) {
  return createAsyncThunk<
    ReturnType,
    ThunkArgsWithCallbacks<ThunkArgs, ReturnType>
  >(typePrefix, async (params, thunkAPI) => {
    const { args, onSuccess, onError } = params;

    try {
      const result = await asyncFunction(args, thunkAPI);
      if (onSuccess) {
        onSuccess(result);
      }
      return result;
    } catch (error) {
      if (onError) {
        onError(error);
      }
      return thunkAPI.rejectWithValue(error);
    }
  });
}
