import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  type: "success",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(state, action) {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    clearNotification(state) {
      state.message = "";
      state.type = "success";
    },
  },
});

export const { setNotification, clearNotification } = notificationSlice.actions;

export const notify = (message, type = "success", timeoutSeconds = 5) => {
  return async (dispatch) => {
    dispatch(setNotification({ message, type }));
    setTimeout(() => {
      dispatch(clearNotification());
    }, timeoutSeconds * 1000);
  };
};

export default notificationSlice.reducer;
