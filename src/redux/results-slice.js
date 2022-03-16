import { createSlice } from '@reduxjs/toolkit';

const ResultSlice = createSlice({
  name: 'results',
  initialState: {
    leaderboard: [],
    currentCompetition: []
  },
  reducers: {
    getLeaderboard: (state, action) => {
      const { payload } = action;
      console.log(payload)
      state.leaderboard = payload
    },
    getResults: (state, action) => {
   
    }
  }
});

export const { getLeaderboard, getResults } = ResultSlice.actions;
export default ResultSlice.reducer;