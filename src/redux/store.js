import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productsReducer from "./productSlice";
import cartReducer from "./cartSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const cartPersistConfig = {
  key: "cart",
  storage: storage,
};

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    cart: persistReducer(cartPersistConfig, cartReducer),
  },
});

export const persistor = persistStore(store);
