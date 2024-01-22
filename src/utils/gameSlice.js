import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    names: null,
    save: false,
  },
  reducers: {
    addName: (state, action) => {
      state.names = action.payload;
    },
    addSave: (state) => {
      state.save = true;
    },
  },
});

export const { addName, addSave } = gameSlice.actions;

export default gameSlice.reducer;
