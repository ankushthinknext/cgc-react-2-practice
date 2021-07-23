import React, { Component } from "react";
import queryString from "query-string";

export default class Cities extends Component {
	state = {
		cities: ["Chandigarh", "mohali", "abc"],
	};
	updateCities = (e) => {
		if (e.code === "Enter") {
			this.setState({ cities: [e.target.value, ...this.state.cities] });
		}
	};
	deleteCities = (city) => {
		let newCities = [...this.state.cities];
		newCities = newCities.filter((i) => i !== city);
		this.setState({ cities: newCities });
	};

	render() {
		return (
			<div>
				{this.state.cities.map((city) => (
					<h1 key={city}>
						{city}{" "}
						<button onClick={() => this.deleteCities(city)}>Delete</button>
					</h1>
				))}
				<input onKeyPress={this.updateCities} type="text" />
			</div>
		);
	}
}
