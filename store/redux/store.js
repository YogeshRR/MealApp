import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../redux/favoriteMeals";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoriteReducer,
  },
});
