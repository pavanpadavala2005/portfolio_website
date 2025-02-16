import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../provider/dataSlice";

export const store = configureStore({
	reducer: {
		data: dataSlice,
	},
});
