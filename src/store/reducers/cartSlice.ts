import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   entities: [],
   quantity: 0
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      cartAdded(state, action) {
         const isExist = state.entities.some(item => item.id === action.payload.id)
         if (isExist) return
         else {
            state.entities.push(action.payload);
            state.quantity = state.entities.length;
         }
      },
      cartRemoved(state, action) {
         state.entities.filter(item =>item.id !== action.payload.id)
         state.quantity = state.entities.length;
      }
   }
})

export const { cartAdded, cartRemoved } = cartSlice.actions;

export default cartSlice.reducer;