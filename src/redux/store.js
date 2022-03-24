import { configureStore } from '@reduxjs/toolkit';
import competitionSlice from './competition-slice';
import resultsSlice from './results-slice';
import socketSlice from './socket-slice';

const store = configureStore({
  reducer: {
    competition: competitionSlice,
    results: resultsSlice,
    socket: socketSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export default store;