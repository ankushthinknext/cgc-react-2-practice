import React, { Component } from "react";

export default function Counter1(props) {
	return (
		<div>
			<h2>{props.count}</h2>
			<button
				onClick={() => props.onIncrement(props.id)}
				className="btn btn-primary">
				Increment
			</button>
			<button className="btn btn-secondary">Decrement</button>
		</div>
	);
}
