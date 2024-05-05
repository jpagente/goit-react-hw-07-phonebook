import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6636fd2d288fedf6937f2738.mockapi.io/api/';

// Async thunk for fetching contacts
export const fetchContacts = createAsyncThunk('contacts/fetchContacts', 
    async (_, thunkAPI) => {  // Note: _, placeholder is put if no args like body passed, applicable to fetchContacts
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message); // Reject the promise with the error message
        }
    }
);   

// Async thunk for adding a contact
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contactData, thunkAPI) => {
      try {
        const response = await axios.post('/contacts', contactData);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message); // Reject the promise with the error message
      }
    }
  );
  
// Async thunk for deleting a contact
export const deleteContact = createAsyncThunk(
'contacts/deleteContact',
async (contactId, thunkAPI) => {
    try {
    await axios.delete(`/contacts/${contactId}`);
    return contactId; // Return the id to identify which contact was deleted
    } catch (error) {
    return thunkAPI.rejectWithValue(error.message); // Reject the promise with the error message
    }
}
);


