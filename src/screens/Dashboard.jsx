import React from "react";
import Cities from "../components/Cities";
import Header from "../components/Header";
import Persons from "../components/Persons";
import Sidebar from "../components/Sidebar.jsx";
import { Route, Switch } from "react-router-dom";
import PersonForm from "../components/PersonForm";
import "./dashboard.css";

function Dashboard(props) {
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
					<Switch>
						<Route
							path={`${props.match.path}/persons/new`}
							component={PersonForm}
						/>
						<Route path={`${props.match.path}/persons`} component={Persons} />
					</Switch>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Dashboard;
