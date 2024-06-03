// src/utils/reduxUtils.ts
import {
  ActionReducerMapBuilder,
  AnyAction,
  AsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

export type RequestState = 'pending' | 'fulfilled' | 'rejected';

export interface AsyncRequestState {
  [key: string]: RequestState;
}

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

const matcher = (
  action: AnyAction
): action is RejectedAction | PendingAction | FulfilledAction =>
  action.type.endsWith('/rejected') ||
  action.type.endsWith('/fulfilled') ||
  action.type.endsWith('/pending');

const requestStatesMiddleware = <T extends AsyncRequestState>(
  builder: ActionReducerMapBuilder<T>
) => {
  builder.addMatcher(matcher, (state, action) => {
    const [type, status] = action.type.split('/');
    return {
      ...state,
      [type]: status,
    };
  });
};

export const initialState = {} as AsyncRequestState;

const requests = createSlice({
  name: 'requestsState',
  initialState,
  reducers: {
    reset: () => initialState,
    resetRequestState: (state, action) => {
      return {
        ...state,
        [action.payload]: 'idle',
      };
    },
  },
  extraReducers: (builder) => requestStatesMiddleware(builder),
});

export const requestsActions = requests.actions;

export default requests.reducer;
