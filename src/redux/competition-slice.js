import { createSlice } from '@reduxjs/toolkit';

const CompetitionSlice = createSlice({
  name: 'competition',
  initialState: {
    allCompetition: [],
    currentCompetition: []
  },
  reducers: {
    getAllCompetitions: (state, action) => {
      const { payload } = action;
      state.allCompetition = payload
    },
    setCompetition: (state, action) => {
      const { payload } = action;
      const currentComp = state.allCompetition.find(item => item.id === payload);
      state.currentCompetition = currentComp;
    }
  }
});

export const { getAllCompetitions, setCompetition } = CompetitionSlice.actions;
export default CompetitionSlice.reducer;