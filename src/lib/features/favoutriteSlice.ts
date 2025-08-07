import { createSlice } from '@reduxjs/toolkit';

type Favourite = {
  id: string;
  title: string;
  price: number;
  img: string;
};

const favoutriteSlice = createSlice({
  name: 'favourites',
  initialState: {
    favourites: [] as Favourite[],
  },
  reducers: {
    addFavourite: (state, action) => {
      state.favourites.push(action.payload);
    },
    removeFavourite: (state, action) => {
      state.favourites = state.favourites.filter(
        (favourite) => favourite.id !== action.payload,
      );
    },
  },
});

export const { addFavourite, removeFavourite } = favoutriteSlice.actions;

export default favoutriteSlice.reducer;
