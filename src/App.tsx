import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
	incremended,
	amountAdded,
	reset,
} from "./features/counter/counter-slice";
import { useFetchBreedsQuery } from "./features/dogs/dogs-api-slice";

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

	const [numDogs, setNumDogs] = useState(10);
	const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

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
				<div
					style={{
						borderRadius: "10px",
						backgroundColor: "lightgray",
						padding: "15px",
					}}
				>
					<p>Count is {count}</p>
					<button onClick={handleAddedOne}>Added +1</button>
					<button onClick={handleAddedThree}>Added +3</button>
					<button onClick={handleReset}>Reset</button>
				</div>

				<hr />

				<div>
					<p>
						<span>Dogs to fetch: </span>
						<select
							value={numDogs}
							onChange={(e) => setNumDogs(Number(e.target.value))}
						>
							<option value={5}>5</option>
							<option value={10}>10</option>
							<option value={15}>15</option>
							<option value={20}>20</option>
						</select>
					</p>
				</div>

				<div>
					<p>Number of dogs fetched: {data.length}</p>
					<table>
						<thead>
							<tr>
								<th>Picture</th>
								<th style={{ textAlign: "left" }}>Name</th>
							</tr>
						</thead>
						<tbody>
							{data.map((breed) => (
								<tr key={breed.id}>
									<td style={{ padding: "10px 20px" }}>
										<img
											style={{
												width: "150px",
												height: "150px",
												borderRadius: "50%",
												objectFit: "cover",
											}}
											src={breed.image.url}
											alt={breed.name}
										/>
									</td>

									<td style={{ textAlign: "left" }}>
										{breed.name}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default App;
