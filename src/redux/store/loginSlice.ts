import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
    homeroomName: string;
    studentNumber: number;
    picture1: string;
    picture2: string;
    error: string | null;
}

const initialState: LoginState = {
    homeroomName: '',
    studentNumber: 0,
    picture1: '',
    picture2: '',
    error: null,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setHomeroomName: (state, action: PayloadAction<string>) => {
            state.homeroomName = action.payload
        },
        setStudentNumber: (state, action: PayloadAction<number>) => {
            state.studentNumber = action.payload;
          },
          setPicture1: (state, action: PayloadAction<string>) => {
            state.picture1 = action.payload;
          },
          setPicture2: (state, action: PayloadAction<string>) => {
            state.picture2 = action.payload;
          },
          setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
          },
    }
})

export const { setHomeroomName, setStudentNumber, setPicture1, setPicture2, setError } = loginSlice.actions;

export default loginSlice.reducer;