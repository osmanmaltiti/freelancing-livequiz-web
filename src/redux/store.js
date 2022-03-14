import { configureStore } from '@reduxjs/toolkit';
import competitionSlice from './competition-slice';

const store = configureStore({
  reducer: {
    competition: competitionSlice
  }
})

export default store;