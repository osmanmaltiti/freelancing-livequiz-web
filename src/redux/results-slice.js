import { createSlice } from '@reduxjs/toolkit';

const ResultSlice = createSlice({
  name: 'results',
  initialState: {
    leaderboard: [],
    results: []
  },
  reducers: {
    getLeaderboard: (state, action) => {
      const { payload } = action;
      state.leaderboard = payload
    },
    getResults: (state, action) => {
      const { payload } = action;
      state.results = payload
    }
  }
});

export const { getLeaderboard, getResults } = ResultSlice.actions;
export default ResultSlice.reducer;