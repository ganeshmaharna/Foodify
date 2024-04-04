import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //Vanilla Redux => Don't mutate state, Returning was mandatory
      //const newState = [...state]
      // newState.items.push(action.payload)
      // return newState

      //But we have to mutate the state
      // RTK uses Immer library behind to abstract these Vanilla Redux Complexity
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearItem: (state) => {
      state.items.length = 0;
    },
  },
});
export default cartSlice.reducer;
export const { addItem, removeItem, clearItem } = cartSlice.actions;
