import { createSlice } from '@reduxjs/toolkit';
import { addAddress, deleteAddress, fetchAddressById, fetchAddresses, updateAddress } from './addressActions';
import { AddressType } from '../../interfaces/AddressType';


interface AddressState {
  addresses: AddressType[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

const initialState: AddressState = {
  addresses: [],
  status: 'idle',
  error: null,
};

const addressSlice = createSlice({
  name: 'addresses',
  initialState,
  reducers: {
    resetAddressesState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddresses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.addresses = action.payload; 
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.addresses.push(action.payload); 
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        const index = state.addresses.findIndex(addr => addr.id === action.payload.id);
        if (index !== -1) {
          state.addresses[index] = action.payload; 
        }
      })
      .addCase(fetchAddressById.fulfilled, (state, action) => {
        const index = state.addresses.findIndex(addr => addr.id === action.payload.id);
        if (index !== -1) {
          state.addresses[index] = action.payload;
        } else {
          state.addresses.push(action.payload);
        }
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.addresses = state.addresses.filter(addr => addr.id !== action.payload); 
      });
  },
});

export const { resetAddressesState } = addressSlice.actions;

export default addressSlice.reducer;
