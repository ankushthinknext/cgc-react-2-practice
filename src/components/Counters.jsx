import React, { Component } from "react";
import Counter1 from "./Counter1";

export default class Counters extends Component {
	state = {
		counters: [
			{ id: 1, count: 0, step: 5 },
			{ id: 2, count: 10, step: 10 },
			{ id: 3, count: 10, step: 3 },
			{ id: 4, count: 20, step: 1 },
			{ id: 5, count: 5, step: 5 },
		],
	};
	handleIncrement = (id) => {
		let clone = [...this.state.counters];
		let index = clone.findIndex((counter) => counter.id === id);
		clone[index].count++;
		this.setState({ counters: clone });
	};
	render() {
		return (
			<div>
				{this.state.counters.map((counter) => (
					<Counter1
						key={counter.id}
						id={counter.id}
						count={counter.count}
						onIncrement={this.handleIncrement}
					/>
				))}
			</div>
		);
	}
}
