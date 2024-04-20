import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      //Vanilla Redux => Don't mutate state, Returning was mandatory
      //const newState = [...state]
      // newState.items.push(action.payload)
      // return newState

      //But we have to mutate the state
      // RTK uses Immer library behind to abstract these Vanilla Redux Complexity
      state.cartItems.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.card.info.id !== itemIdToRemove
      );
    },
    clearItem: (state) => {
      state.cartItems.length = 0;
    },
  },
});
export default cartSlice.reducer;
export const { addItem, removeItem, clearItem } = cartSlice.actions;
