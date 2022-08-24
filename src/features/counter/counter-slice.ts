import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 0,
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		incremended(state) {
			state.value++;
		},
		amountAdded(state, action: PayloadAction<number>) {
			state.value += action.payload;
		},
		reset(state) {
			state.value = 0;
		},
	},
});

export const { incremended, amountAdded, reset } = counterSlice.actions;
export default counterSlice.reducer;
