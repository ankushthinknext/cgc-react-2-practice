import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FormControl, Select, InputLabel, Paper } from "@material-ui/core";
import Joi from "joi-browser";
import Swal from "sweetalert2";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
		padding: "20px",
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function UserForm(props) {
	const [formData, setFormData] = useState({});
	const [errors, setErrors] = useState(null);
	const [method, setMethod] = useState("POST");
	const classes = useStyles();
	const handleFormChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	useEffect(() => {
		props.match.params.id &&
			axios
				.get(
					`${process.env.REACT_APP_BACKEND_API_URL}user/${props.match.params.id}`,
				)
				.then((result) => {
					if (result.data.status === "success") {
						setFormData(result.data.data);
						setMethod("PUT");
					}
				});
	}, []);

	const formSchema = {
		fullname: Joi.string().required().min(7).max(30),
		username: Joi.string().required().min(7).max(30),
		email: Joi.string().email().required().min(7).max(30),
		password: Joi.string().required().min(7).max(30),
		role: Joi.string().required(),
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		//validate the request
		let validation = Joi.validate(formData, formSchema, { abortEarly: false });
		if (validation.error) {
			setErrors(validation.error.details);
			return;
		}

		//make post request to server
		axios({
			method,
			url: `${process.env.REACT_APP_BACKEND_API_URL}${
				method === "PUT" ? "user/" + props.match.params.id : "user"
			}`,
			data: formData,
		})
			.then((result) => {
				if (result.status === 200) {
					setErrors(null);
					Swal.fire(
						`User ${method === "PUT" ? "updated" : "created"} successfully...`,
					);
					props.history.goBack();
				} else {
					Swal.fire("Error", "Somethings went wrong", "error");
				}
			})
			.catch((err) => {
				Swal.fire("Error", "Somethings went wrong", "error");
			});
	};
	console.log(errors);
	console.log(formData);

	return (
		<Container>
			<Paper>
				<div className={classes.paper}>
					<form
						onSubmit={handleSubmit}
						onChange={handleFormChange}
						className={classes.form}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="fname"
									name="fullname"
									variant="outlined"
									fullWidth
									id="firstName"
									placeholder="Full Name"
									value={formData && formData.fullname}
									autoFocus
								/>
								{errors &&
									errors
										.filter((err) => err.context.key === "fullname")
										.map((error) => (
											<p className="form-errors">{error.message}</p>
										))}
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									variant="outlined"
									fullWidth
									id="lastName"
									placeholder="User name"
									name="username"
									autoComplete="lname"
									value={formData && formData.username}
								/>
								{errors &&
									errors
										.filter((err) => err.context.key === "username")
										.map((error) => (
											<p className="form-errors">{error.message}</p>
										))}
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="fname"
									name="email"
									variant="outlined"
									fullWidth
									id="firstName"
									placeholder="Email"
									autoFocus
									value={formData && formData.email}
								/>
								{errors &&
									errors
										.filter((err) => err.context.key === "email")
										.map((error) => (
											<p className="form-errors">{error.message}</p>
										))}
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="fname"
									name="password"
									variant="outlined"
									fullWidth
									id="firstName"
									placeholder="Password"
									type="password"
									value={formData && formData.password}
								/>
								{errors &&
									errors
										.filter((err) => err.context.key === "password")
										.map((error) => (
											<p className="form-errors">{error.message}</p>
										))}
							</Grid>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FormControl variant="outlined" fullWidth className="mt-3">
								<Select
									native
									placeholder="Role"
									inputProps={{
										name: "role",
										id: "outlined-age-native-simple",
										shrink: false,
									}}>
									<option aria-label="None" value="" />
									<option selected={formData.role === "admin"} value="admin">
										Admin
									</option>
									<option
										selected={formData.role === "cashier"}
										value="cashier">
										Cahier
									</option>
								</Select>
								{errors &&
									errors
										.filter((err) => err.context.key === "role")
										.map((error) => (
											<p className="form-errors">{error.message}</p>
										))}
							</FormControl>
						</Grid>
						<Button
							type="submit"
							variant="contained"
							size="large"
							color="primary"
							className="c-btn mt-5">
							{method === "POST" ? "Create User" : "Update User"}
						</Button>
					</form>
				</div>
			</Paper>
		</Container>
	);
}
