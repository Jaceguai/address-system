import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiService } from "../../utils/apiService";
import { AddressType } from "../../interfaces/AddressType";

export const fetchAddresses = createAsyncThunk(
  "addresses/fetchAll",
  async () => {
    const response = await ApiService().get<AddressType[]>("/addresses");
    return response;
  }
);

export const addAddress = createAsyncThunk(
  "addresses/add",
  async (address: AddressType) => {
    const response = await ApiService().post<AddressType>(
      "/addresses",
      address
    );
    return response;
  }
);

export const updateAddress = createAsyncThunk(
  "addresses/update",
  async (address: AddressType) => {
    const response = await ApiService().put<AddressType>(
      `/addresses/${address.id}`,
      address
    );
    return response;
  }
);

export const deleteAddress = createAsyncThunk(
  "addresses/delete",
  async (id: number) => {
    await ApiService().delete<void>(`/addresses/${id}`);
    return id;
  }
);

export const fetchAddressById = createAsyncThunk(
  "addresses/fetchById",
  async (id: number) => {
    const response = await ApiService().get<AddressType>(`/addresses/${id}`);
    return response;
  }
);
