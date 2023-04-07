import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL ="https://642f5f19b289b1dec4b1d4b8.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (text, thunkAPI) => {
  try {
      const response = await axios.post("/contacts", {...text});
      return response.data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
  try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
  }
});
