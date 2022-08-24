import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
	incremended,
	amountAdded,
	reset,
} from "./features/counter/counter-slice";

import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	const handleAddedOne = () => {
		dispatch(incremended());
	};

	const handleAddedThree = () => {
		dispatch(amountAdded(3));
	};

	const handleReset = () => {
		dispatch(reset());
	};

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<p>Count is {count}</p>
				<hr />
				<button onClick={handleAddedOne}>Added +1</button>
				<button onClick={handleAddedThree}>Added +3</button>
				<button onClick={handleReset}>Reset</button>
			</div>
		</div>
	);
}

export default App;
