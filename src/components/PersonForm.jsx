import React, { useState, useEffect } from "react";
import Joi from "joi-browser";

export default function PersonForm(props) {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		age: "",
	});
	const [errors, setErrors] = useState([]);
	const formSchema = {
		name: Joi.string().required().max(30).min(5),
		email: Joi.string().email({ minDomainAtoms: 2 }).required().max(30).min(8),
		age: Joi.number().max(120).min(10),
	};

	const handleFormChange = (e) => {
		let validationResult = Joi.validate(formData, formSchema);
		setErrors(validationResult.error.details);
		let newFormData = { ...formData };
		newFormData[e.target.name] = e.target.value;

		setFormData(newFormData);
	};
	useEffect(() => {
		let selectedId = props.match.params.id;
		if (selectedId) {
			getAUser(selectedId);
		}

		async function getAUser(id) {
			let result = await fetch(
				`https://60efff36f587af00179d3c01.mockapi.io/persons/${id}`,
			);
			let data = await result.json();
			if (result.status === 200) setFormData(data);
		}
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		let validationResult = Joi.validate(formData, formSchema, {
			abortEarly: false,
		});
		setErrors(validationResult.error.details);
		const createUser = async () => {
			let result = await fetch(
				"https://60efff36f587af00179d3c01.mockapi.io/persons",
				{
					method: "POST",
					body: JSON.stringify(formData),
					headers: {
						"Content-type": "application/json",
					},
				},
			);
			console.log(result);
		};
		// createUser();
	};
	const handleBackward = (params) => {
		props.history.goBack();
		// props.history.push("/cities");
	};

	return (
		<div>
			<button onClick={handleBackward} className="btn btn-secondary">
				Back
			</button>
			<form
				onChange={handleFormChange}
				onSubmit={handleSubmit}
				className="person-form mt-5 border p-5 rounded shadow-sm">
				{errors.length !== 0 &&
					errors.map((error) => (
						<div class="alert alert-danger" role="alert">
							{error.message}
						</div>
					))}

				<div className="mb-3 row">
					<label for="staticEmail" className="col-sm-2 col-form-label">
						Name
					</label>
					<div className="col-sm-10">
						<input
							name="name"
							type="text"
							className="form-control error-red"
							value={formData.name}
						/>
					</div>
				</div>
				<div className="mb-3 row">
					<label for="staticEmail" className="col-sm-2 col-form-label">
						E-mail
					</label>
					<div className="col-sm-10 ">
						<input
							name="email"
							type="text"
							className="form-control"
							value={formData.email}
						/>
					</div>
				</div>
				<div className="mb-3 row">
					<label for="staticEmail" className="col-sm-2 col-form-label">
						Age
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							name="age"
							className="form-control"
							value={formData.age}
						/>
					</div>
				</div>
				<div className="mt-5 row">
					<div className="col-sm-10 text-left">
						<input type="submit" className="btn btn-secondary" value="Submit" />
					</div>
				</div>
			</form>
		</div>
	);
}
