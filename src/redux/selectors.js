// src/redux/selectors.js
import { createSelector } from '@reduxjs/toolkit';

// Selector for retrieving contacts from the state
export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
// Selector for retrieving the current filter value
export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],           // Parameter1 --> Dependency Array
  (contacts, filterString) => {                   // Parameter2 --> Results of Parameter 1 waiting
    // Body of Transducer Function
    if (!filterString) {                          // If No Filter Pa, return the contacts    
      return contacts;      
    }
    const lowerCaseFilterString = filterString.toLowerCase();   // if existing ang filter
    return contacts.filter(contact =>
      contact.name.toLowerCase()
      .includes(lowerCaseFilterString)
    );
  }
);