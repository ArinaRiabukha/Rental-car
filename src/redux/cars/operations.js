import { createAsyncThunk } from "@reduxjs/toolkit";
import { appApi } from "../api";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (_, thunkAPI) => {
    try {
      const response = await appApi.get("/cars");
      return response.data.cars;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
