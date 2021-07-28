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

function Products(props) {
	const classes = useStyles();
	const [query, setQuery] = useState({
		limit: 100,
	});
	const [products, setProducts] = useState(null);
	const [users, setUsers] = useState(null);
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		axios(
			`${process.env.REACT_APP_BACKEND_API_URL}product?${queryString.stringify(
				query,
			)}`,
		).then((result) => setProducts(result.data.data.products));
	}, [refresh, query]);

	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "This Product will be deleted!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Delete",
		}).then((result) => {
			if (result.isConfirmed) {
				let productCopy = [...products];
				let filtered = productCopy.filter((product) => product._id !== id);
				setProducts(filtered);
				axios
					.delete(`${process.env.REACT_APP_BACKEND_API_URL}product/${id}`)
					.then((result) => {
						if (result.data.status === "success") {
							Swal.fire(
								"Deleted!",
								"Product deleted successfully...",
								"success",
							);
							setRefresh(!refresh);
						} else {
							setProducts(productCopy);
							Swal.fire("Deleted!", "Something went wrong...", "error");
						}
					})
					.catch((err) => {
						setProducts(productCopy);
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
							New Product
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
								<option value="Highest to Lowest">Highest to Lowest</option>
								<option value="Lowest to Highest">Lowest to Highest</option>
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
										<TableCell>Image</TableCell>
										<TableCell align="right">Name</TableCell>
										<TableCell align="right">Price</TableCell>
										<TableCell align="right">Category</TableCell>
										<TableCell align="right">Actions</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{products ? (
										products.map((product) => (
											<TableRow key={product._id}>
												<TableCell component="th" scope="user">
													<img
														style={{ width: "75px" }}
														src={product.image}
														alt=""
													/>
												</TableCell>
												<TableCell align="right">{product.name}</TableCell>
												<TableCell align="right">{product.price}</TableCell>
												<TableCell align="right">
													<Chip
														variant="contained"
														label={
															product.category.length &&
															product.category[0].name
														}
														color="secondary"
													/>
												</TableCell>

												<TableCell align="right">
													<Link
														to={`${props.match.path}/update/${product._id}`}>
														<EditIcon />
													</Link>

													<DeleteIcon
														onClick={() => handleDelete(product._id)}
													/>
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

export default Products;
