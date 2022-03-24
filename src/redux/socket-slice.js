import { createSlice } from "@reduxjs/toolkit";

const SocketSlice = createSlice({
    name: 'socket',
    initialState: { socket: {} },
    reducers: {
        setGlobalSocket: (state, action) => {
            const { payload } = action;
            state.socket = payload;
        }
    }
});

export const { setGlobalSocket } = SocketSlice.actions;
export default SocketSlice.reducer;