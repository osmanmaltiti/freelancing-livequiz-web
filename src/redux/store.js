import { configureStore } from '@reduxjs/toolkit';
import competitionSlice from './competition-slice';
import resultsSlice from './results-slice';

const store = configureStore({
  reducer: {
    competition: competitionSlice,
    results: resultsSlice
  }
})

export default store;