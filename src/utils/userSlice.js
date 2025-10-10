import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: () => {
      return null;
    },
  },
});

// ✅ Export actions
export const { addUser, removeUser } = userSlice.actions;

// ✅ Export reducer (default export)
export default userSlice.reducer;
