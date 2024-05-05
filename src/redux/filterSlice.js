// src/redux/filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

//Define initial state
const initialFilterState = '';

export const filterSlice = createSlice
({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        setFilter(state, action)
        { 
            return action.payload;
        },
    },
});

export const { setFilter } = filterSlice.actions;