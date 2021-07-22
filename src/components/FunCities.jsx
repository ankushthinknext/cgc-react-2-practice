import React, { useState } from "react";

function FunCities() {
	const [cities, setCities] = useState(["Delhi", "Chandigarh", "Srinagar"]);
	const updateCities = (e) => {
		if (e.code === "Enter") {
			setCities([...cities, e.target.value]);
		}
	};

	return (
		<div>
			{cities.map((city) => (
				<h2 key={city}>{city}</h2>
			))}

			<input onKeyUp={updateCities} type="text" />
		</div>
	);
}

export default FunCities;
