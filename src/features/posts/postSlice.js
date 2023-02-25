import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [
  { id: "1", title: "first post here!", content: "mckaw kodidew" },
  { id: "2", title: "lorome espilome", content: "korivo la serto?" },
];

const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },

      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
