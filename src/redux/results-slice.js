import { createSlice } from '@reduxjs/toolkit';

const ResultSlice = createSlice({
  name: 'results',
  initialState: {
    leaderboard: [],
  },
  reducers: {
    getLeaderboard: (state, action) => {
      const { payload } = action;
      state.leaderboard = payload
    }
  }
});

export const { getLeaderboard, getResults } = ResultSlice.actions;
export default ResultSlice.reducer;