import React, { useEffect, useState } from "react";
import { paginate, sorting } from "./utils/utils";
import Swal from "sweetalert2";
import queryString from "query-string";
import { Link } from "react-router-dom";

let allUsers = [];
function Persons(props) {
	let queryData = queryString.parse(props.location.search);
	const [persons, setPersons] = useState([]);
	const [pageSize, setPageSize] = useState(50);
	const [currentPage, setCurrentPage] = useState(0);
	const [sortColumn, setSortColumn] = useState(
		queryData.sortBy ? queryData.sortBy : "name",
	);
	const [sortOrder, setSortOrder] = useState(
		queryData.sortOrder ? queryData.sortOrder : "asc",
	);
	const [refresh, setRefresh] = useState(false);

	let totalLinks = Math.ceil(persons.length / pageSize);
	let linksArray = [];
	//converting total links to an array
	for (let i = 0; i < totalLinks; i++) linksArray.push(i);

	//paginate the results
	let data = paginate(persons, pageSize, currentPage);
	console.log("Before sorging", data);
	//sort the results
	data = data.length && sorting(data, sortColumn, sortOrder);
	console.log("after sorting", data);

	const handlePageChange = (linkNo) => {
		if (linkNo === "next") setCurrentPage(currentPage + 1);
		else if (linkNo === "previous") setCurrentPage(currentPage - 1);
		else setCurrentPage(linkNo);
	};

	useEffect(() => {
		async function getPersons() {
			let result = await fetch(
				"https://60efff36f587af00179d3c01.mockapi.io/persons",
			);
			let data = await result.json();
			allUsers = data;
			setPersons(data);
		}
		getPersons();
	}, [refresh]);

	const handleSorting = (key) => {
		setSortColumn(key);
		setSortOrder(`${sortOrder === "asc" ? "desc" : "asc"}`);
	};
	const handleSearch = (e) => {
		let searchKeyword = e.target.value;
		let filtered = allUsers.filter((user) => {
			user = user.name.toLowerCase();
			return (
				user.startsWith(searchKeyword.toLowerCase()) ||
				user.search(searchKeyword.toLowerCase()) != -1
			);
		});
		console.log(filtered);
		setPersons(filtered);
	};
	const handleDelete = (id) => {
		let copy = [...data];
		async function deletePerson(id) {
			let result = await fetch(
				`https://60efff36f587af00179d3c01.mockapi.io/persons/${id}`,
				{
					method: "DELETE",
				},
			);
			if (result.status === 200) {
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "User has been delete",
					showConfirmButton: false,
					timer: 1500,
				});
			} else {
				Swal.fire({
					position: "top-end",
					icon: "error",
					title: "Something went wrong..",
					timer: 1500,
				});
				setPersons(copy);
			}
		}
		Swal.fire({
			title: "Are you sure?",
			text: "This user will be deleted!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Delete",
		}).then((result) => {
			let filtered = data.filter((user) => user.id !== id);
			setPersons(filtered);
			if (result.isConfirmed) {
				deletePerson(id);
				Swal.fire("Deleted!", "Your file has been deleted.", "success");
				setRefresh(!refresh);
			}
		});
	};
	console.log(refresh);

	return (
		<div>
			<div className="m-table">
				<div class="mb-3 mt-5 search-bar">
					<input
						onKeyUp={handleSearch}
						type="email"
						class="form-control"
						id="exampleFormControlInput1"
						placeholder="Search the users"
					/>
				</div>
				<Link to="/persons/new">
					<button className="btn btn-primary ml-auto">New Person +</button>
				</Link>

				<table className="table m-table">
					<thead>
						<tr>
							<th onClick={() => handleSorting(`id`)}>Id</th>
							<th onClick={() => handleSorting(`name`)}>
								Name{" "}
								<span>
									<i
										class={` ${
											sortColumn === "name" && sortOrder === "desc"
												? " fas fa-arrow-up desc-arrow"
												: " fas fa-arrow-up "
										}`}></i>
								</span>
							</th>
							<th>Avatar</th>
							<th onClick={() => handleSorting(`age`)}>
								Age
								<span>
									<i
										class={` ${
											sortColumn === "age" && sortOrder === "desc"
												? " fas fa-arrow-up desc-arrow"
												: " fas fa-arrow-up "
										}`}></i>
								</span>
							</th>
							<th onClick={() => handleSorting(`email`)}>
								E-mail
								<span>
									<i
										class={` ${
											sortColumn === "email" && sortOrder === "desc"
												? " fas fa-arrow-up desc-arrow"
												: " fas fa-arrow-up "
										}`}></i>
								</span>
							</th>
							<th>
								Verified <input type="checkbox" />
							</th>
						</tr>
					</thead>
					<tbody>
						{data.length &&
							data.map((person) => (
								<tr key={person.id}>
									<td>{person.id}</td>
									<td>{person.name}</td>
									<td>
										<img
											className="profile-picture"
											src={person.avatar}
											alt=""
										/>
									</td>
									<td>{person.age}</td>
									<td>{person.email}</td>
									<td>{person.isVerified ? "Verified" : "Not Verified"}</td>
									<td>
										<button
											onClick={() => handleDelete(person.id)}
											className="btn btn-danger">
											<i class="fas fa-trash"></i>
										</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
			<div className="paginated-links mt-3">
				<ul class="pagination">
					<li onClick={() => handlePageChange("previous")} class={`page-item `}>
						<a class="page-link" href="#">
							Previous
						</a>
					</li>
					{linksArray.map((link) => (
						<li
							onClick={() => handlePageChange(link)}
							class={`page-item ${link === currentPage && "active"}`}>
							<a class="page-link" href="#">
								{link + 1}
							</a>
						</li>
					))}
					<li onClick={() => handlePageChange("next")} class={`page-item `}>
						<a class="page-link" href="#">
							Next
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Persons;
