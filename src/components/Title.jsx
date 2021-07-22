import React, { useState, useEffect } from "react";

function Title() {
	const [title, setTitle] = useState("Hello");
	const [name, setName] = useState("Mohit");

	useEffect(() => {
		//statement to excecuted when component is constructed or updated
		console.log("use effect called");
	}, []);
	const titleChanged = (e) => {
		setTitle(e.target.value);
	};
	const nameChanged = (e) => {
		setName(e.target.value);
	};

	return (
		<div>
			{console.log("Rendered")}
			<h1>Title - {title}</h1>
			<h1>Name - {name}</h1>
			<input onKeyUp={titleChanged} type="text" />
			<input onKeyUp={nameChanged} type="text" />
		</div>
	);
}

export default Title;
