import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

/**
 * Reason to use object ot store the api result as initial value
 * the search complexity to search in a array is O(n)
 * the search complexity to search an object or map is O(1)
 * [i, iph, iphone]
 * {i: 1, iph: 2}
 */
