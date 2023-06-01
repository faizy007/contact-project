import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  error: "",
  contact: [],
};
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      console.log("state?.contact?",state?.contact)
      state?.contact?.push(payload); 
  },
  removeContact: (state, action) => {
    console.log("in dlete")
      // state.contact = state.contact.filter(u => u.uuid !== action.payload)
      state.contact = state.contact.filter(contact => contact.id !== action.payload)
  },
  updateContact: (state, { payload }) => {
      const index = state.contact.findIndex(contact => contact.id === payload?.id);
      if (index !== -1) {
        state.contact[index] = { ...state.contact[index], ...payload };
      }
   
},
},
});
export const { addContact, removeContact,updateContact } = contactSlice.actions;
export default contactSlice.reducer;