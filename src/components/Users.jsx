import React, { useEffect, useState } from "react";
import axios from "axios";
import queryString from "query-string";
import {
	Chip,
	Container,
	Grid,
	Paper,
	Button,
	InputAdornment,
	TextField,
	FormControl,
	Select,
	Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import moment from "moment";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
	table: {},
	firstRow: {
		margin: "20px 0px",
	},
});

function Users(props) {
	const classes = useStyles();
	const [query, setQuery] = useState({
		limit: 100,
	});
	const [users, setUsers] = useState(null);
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		axios(
			`${process.env.REACT_APP_BACKEND_API_URL}user?${queryString.stringify(
				query,
			)}`,
		).then((result) => setUsers(result.data.data.users));
	}, [refresh, query]);

	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "This user will be deleted!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Delete",
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.delete(`${process.env.REACT_APP_BACKEND_API_URL}user/${id}`)
					.then((result) => {
						if (result.data.status === "success") {
							Swal.fire("Deleted!", "User deleted successfully...", "success");
							setRefresh(!refresh);
						}
					})
					.catch((err) => {
						Swal.fire("Deleted!", "Something went wrong...", "error");
					});
			}
		});
	};

	const handleQueryChange = (e) => {
		setUsers(null);
		setQuery({ ...query, [e.target.name]: e.target.value });
	};
	console.log(query);
	console.log(users);
	return (
		<div>
			<Container>
				<Grid container justifyContent="flex-end" className={classes.firstRow}>
					<Link to={`${props.match.path}/new`}>
						<Button variant="contained" color="secondary">
							New User
						</Button>
					</Link>
				</Grid>
				<Grid container justifyContent="flex-end" className="my-3">
					<form onChange={handleQueryChange}>
						<TextField
							placeholder="Search..."
							id="outlined-start-adornment"
							className=""
							name="keyword"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon />
									</InputAdornment>
								),
							}}
							variant="outlined"
						/>
						<FormControl variant="outlined">
							<Select
								native
								label="Role"
								placeholder="Role"
								inputProps={{
									name: "role",
									shrink: false,
								}}>
								<option aria-label="None" value="" />
								<option value="all">All</option>
								<option value="admin">Admin</option>
								<option value="cashier">Cahier</option>
							</Select>
						</FormControl>
						<FormControl variant="outlined">
							<Select
								native
								placeholder="Role"
								inputProps={{
									name: "sort",

									id: "outlined-age-native-simple",
									shrink: false,
								}}>
								<option aria-label="None" value="" />
								<option value="Newest">Newest</option>
								<option value="Oldest">Oldest</option>
								<option value="Name">Name</option>
								<option value="Last Active">Last Active</option>
							</Select>
						</FormControl>
					</form>
				</Grid>
				<Grid container>
					<Grid item xs={12}>
						<Paper>
							<Table className={classes.table} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>Full Name</TableCell>
										<TableCell align="right">Username</TableCell>
										<TableCell align="right">Role</TableCell>
										<TableCell align="right">Last Active</TableCell>
										<TableCell align="right">Actions</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{users ? (
										users.map((user) => (
											<TableRow key={user._id}>
												<TableCell component="th" scope="user">
													{user.fullname}
												</TableCell>
												<TableCell align="right">{user.username}</TableCell>
												<TableCell align="right">
													<Chip
														variant="outline"
														label={user.role}
														color="secondary"
													/>
												</TableCell>
												<TableCell align="right">
													{moment(user.lastActive).format("llll")}
												</TableCell>
												<TableCell align="right">
													<Link to={`${props.match.path}/update/${user._id}`}>
														<EditIcon />
													</Link>

													<DeleteIcon onClick={() => handleDelete(user._id)} />
												</TableCell>
											</TableRow>
										))
									) : (
										<Box item sm={6} style={{ width: "100%" }}>
											<LinearProgress />
										</Box>
									)}
								</TableBody>
							</Table>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Users;
