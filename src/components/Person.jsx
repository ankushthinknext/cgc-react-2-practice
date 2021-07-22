import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./person.css";

export default function Person() {
	const [person, setPerson] = useState({});
	let id = useParams().id;
	useEffect(() => {
		getAUser(id);
		async function getAUser(id) {
			let result = await fetch(
				`https://60efff36f587af00179d3c01.mockapi.io/persons/${id}`,
			);
			let data = await result.json();
			setPerson(data);
		}
	}, []);
	console.log(person);
	return (
		<div className="container mt-5 d-flex justify-content-center">
			<div className="card p-3">
				<div className="d-flex align-items-center">
					<div className="image">
						{" "}
						<img src={person.avatar} className="rounded" width="155" />{" "}
					</div>
					<div className="ml-3 w-100">
						<h4 className="mb-0 mt-0">{person.name}</h4>{" "}
						<span>Senior Journalist</span>
						<div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
							<div className="d-flex flex-column">
								{" "}
								<span className="articles">Age</span>{" "}
								<span className="number1">{person.age}</span>{" "}
							</div>
							<div className="d-flex flex-column">
								{" "}
								<span className="followers">Email</span>{" "}
								<span className="number2">{person.email}</span>{" "}
							</div>
							<div className="d-flex flex-column">
								{" "}
								<span className="rating"> Verification</span>{" "}
								<span className="number3">
									{person.isVerified ? "Verified" : "Not Verified"}
								</span>{" "}
							</div>
						</div>
						<div className="button mt-2 d-flex flex-row align-items-center">
							{" "}
							<button className="btn btn-sm btn-outline-primary w-100">
								Chat
							</button>{" "}
							<button class="btn btn-sm btn-primary w-100 ml-2">Follow</button>{" "}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
