import React, { Component } from "react";

export default class Counter extends Component {
	constructor() {
		super();
		console.log("Conunter Constructor Called...");
	}
	state = {
		count: 0,
		persons: [],
	};
	increment = () => {
		this.setState({ count: this.state.count + 1 });
	};
	decrement = () => {
		this.setState({ count: this.state.count - 1 });
	};
	componentWillMount() {
		console.log("Counter component is about to  Mount");
	}
	componentDidMount() {
		console.log("Component mounted");
		console.log(this.state.persons);
	}
	componentWillUpdate() {
		console.log("Component is about to update");
	}
	componentDidUpdate() {
		console.log("Counter component Update");
	}
	componentWillUnmount() {
		console.log("Operation closed....");
	}

	render() {
		console.log("Counter component rendered");
		return (
			<div>
				<h1 className={this.state.count >= 0 ? "green" : "red"}>
					{this.state.count}
				</h1>

				<button onClick={this.increment} className="btn btn-success">
					Increment
				</button>
				<button onClick={this.decrement} className="btn btn-danger ms-3">
					Decrement
				</button>
			</div>
		);
	}
}
