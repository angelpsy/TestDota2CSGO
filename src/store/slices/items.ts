import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { Item } from "../../types/items";

export interface ItemsState {
  value: Item[];
}

const initialState: ItemsState = {
  value: [],
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.value.unshift(action.payload);
    },
    removeLastItem: (state) => {
      state.value.pop();
    },
  },
});

export const { addItem, removeLastItem } = itemsSlice.actions;

export default itemsSlice.reducer;
