import React from "react";
import Cities from "../components/Cities";
import Header from "../components/Header";
import Persons from "../components/Persons";
import Sidebar from "../components/Sidebar.jsx";
import "./dashboard.css";

function Dashboard() {
	return (
		<React.Fragment>
			<div className="first-row">
				<Header />
			</div>
			<div className="content">
				<div className="sidebar-wrap">
					<Sidebar />
				</div>
				<div className="main-area">
					<Cities />
				</div>
			</div>
		</React.Fragment>
	);
}

export default Dashboard;
