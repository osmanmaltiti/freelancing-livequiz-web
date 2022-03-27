import { createSlice } from "@reduxjs/toolkit";

const muteSlice = createSlice({
  name: 'mute',
  initialState: { mute: false },
  reducers: {
    setMute: (state) => {
      state.mute = !state.mute
    }
  }
});
export const { setMute } = muteSlice.actions
export default muteSlice.reducer