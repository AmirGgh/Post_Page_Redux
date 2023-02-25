import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Dudo Kero" },
  { id: "1", name: "Dribo Yoku" },
  { id: "2", name: "Groe Hiener" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
