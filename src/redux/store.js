import { configureStore } from '@reduxjs/toolkit';
import competitionSlice from './competition-slice';
import resultsSlice from './results-slice';
import muteSlice from './mute-slice';

const store = configureStore({
  reducer: {
    competition: competitionSlice,
    results: resultsSlice,
    mute: muteSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export default store;