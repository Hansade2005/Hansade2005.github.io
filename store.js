import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], total: 0 },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price; // assuming action.payload has a price property
    },
    updateQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        const deltaQuantity = action.payload.quantity - state.items[itemIndex].quantity;
        state.items[itemIndex].quantity = action.payload.quantity;
        state.total += deltaQuantity * state.items[itemIndex].price; // update total
      }
    },
  },
});

const walletSlice = createSlice({
  name: 'wallet',
  initialState: { balance: 0 },
  reducers: {
    topUp: (state, action) => {
      state.balance += action.payload;
    },
    purchase: (state, action) => {
      state.balance -= action.payload;
    },
  },
});

// Add a new slice for the user details
const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (state, action) => action.payload,
  },
});

export const { addToCart, updateQuantity } = cartSlice.actions;
export const { topUp, purchase } = walletSlice.actions;
export const { setUser } = userSlice.actions; // export the setUser action

export const selectUser = (state) => state.user; // export the selectUser selector

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  wallet: walletSlice.reducer,
  user: userSlice.reducer, // add the user reducer to the root reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export const withdraw = (amount) => {
  return {
    type: 'WITHDRAW',
    payload: amount,
  };
};

export default store;