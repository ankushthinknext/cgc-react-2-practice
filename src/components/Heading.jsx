import React from "react";

class Heading extends React.Component {
	render() {
		return (
			<>
				<h1> Name ---- Mr . {this.props.name}</h1>
				<h1> Age ---- {this.props.age}</h1>
				<h1> Location ---- Mr . {this.props.location}</h1>
			</>
		);
	}
}

export default Heading;
