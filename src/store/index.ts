import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./slices/items";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

// Action creators are generated for each case reducer function
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
