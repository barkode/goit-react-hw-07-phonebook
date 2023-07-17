import { createSlice } from '@reduxjs/toolkit';

import { FILTER } from 'utils/constants';

export const filterSlice = createSlice({
  name: FILTER,
  initialState: '',
  reducers: {
    setFilter: (_, action) => action.payload,
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
