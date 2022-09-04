import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tableForm: [],
};

export const tableSlice = createSlice({
  name: 'tableForm',
  initialState,
  reducers: {
    // addContact: (state, action) => {},
    addField: (state, { payload }) => {
      state.tableForm.push(payload);
    },
    deleteField: (state, { payload }) => {
      state.tableForm = state.tableForm.filter(({ id }) => id !== payload);
    },
  },
});

export const { addField, deleteField } = tableSlice.actions;

export default tableSlice.reducer;
