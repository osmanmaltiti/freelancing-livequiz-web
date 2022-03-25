import { createSlice } from '@reduxjs/toolkit';

const current_comp = JSON.parse(localStorage.getItem('currentCompetition'))

const CompetitionSlice = createSlice({
  name: 'competition',
  initialState: {
    allCompetition: [],
    currentCompetition: current_comp
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
      localStorage.setItem('currentCompetition', JSON.stringify(currentComp));
    }
  }
});

export const { getAllCompetitions, setCompetition } = CompetitionSlice.actions;
export default CompetitionSlice.reducer;