import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    names: null,
    save: null,
  },
  reducers: {
    addName: (state, action) => {
      state.names = action.payload;
    },
  },
});

export const { addName } = gameSlice.actions;

export default gameSlice.reducer;
