import React, { useState } from "react";
import queryString from "query-string";

function FunCounter(props) {
	console.log(props.location.search);
	let queryData = queryString.parse(props.location.search);
	console.log(queryData);
	let [count, setCount] = useState(10);

	const increment = () => {
		setCount(count + 1);
	};
	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<h2>{count}</h2>
			<buttton onClick={increment} className="btn btn-success">
				Increment
			</buttton>
			<buttton onClick={decrement} className="btn btn-dark">
				decrement
			</buttton>
		</div>
	);
}

export default FunCounter;
