import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "./data.json";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_APP_BASE_URL;

export const submitMail = createAsyncThunk(
	"mail/submitMail",
	async (formData, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${API_URL}/mail/post`, formData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response?.data || "Something went wrong");
		}
	}
);

const initialState = {
	Education: data.Education,
	Skills: data.Skills,
	Projects: data.Projects,

	mailData: null,
	loading: false,
	error: null,
	success: false,
};

export const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		resetMailState: (state) => {
			state.mailData = null;
			state.loading = false;
			state.error = null;
			state.success = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(submitMail.pending, (state) => {
				state.loading = true;
				state.error = null;
				state.success = false;
			})
			.addCase(submitMail.fulfilled, (state, action) => {
				state.loading = false;
				state.mailData = action.payload;
				state.success = true;
			})
			.addCase(submitMail.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
				state.success = false;
			});
	},
});

export const EducationalData = (state) => state.data.Education;
export const SkillsData = (state) => state.data.Skills;
export const ProjectsData = (state) => state.data.Projects;

export const { resetMailState } = dataSlice.actions;

export default dataSlice.reducer;
