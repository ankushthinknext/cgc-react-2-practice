import React, { Component } from "react";

export default class Paragraph extends Component {
	state = {
		name: "Mohit",
	};
	nameChanged = (e) => {
		this.setState({ name: e.target.value });
	};
	render() {
		return (
			<div>
				<h1>{this.state.name}</h1>
				<h1>{this.state.name}</h1>
				<h1>{this.state.name}</h1>
				<h1>{this.state.name}</h1>
				<h1>{this.state.name}</h1>
				<h1>{this.state.name}</h1>
				<h1>{this.state.name}</h1>
				{this.state.name}
				<input onKeyUp={this.nameChanged} type="text" />
			</div>
		);
	}
}
