import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  allContacts: [],
};

const contact = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const _id = uuidv4();
      const contact = { ...action.payload, _id };
      state.allContacts = [...state.allContacts, contact];
    },
    updateContact: (state, action) => {
      debugger;
      const updatedContact = action.payload;
      const index = state.allContacts.findIndex(
        (contact) => contact._id === updatedContact._id
      );
      if (index !== -1) {
        state.allContacts[index] = updatedContact;
      }
    },
    removeContact: (state, action) => {
      const filteredContacts = state.allContacts.filter(
        (item) => item?._id != action.payload
      );

      console.log(filteredContacts);

      state.allContacts = [...filteredContacts];
    },
  },
});

export const { addContact, removeContact, updateContact } = contact.actions;

export default contact.reducer;
