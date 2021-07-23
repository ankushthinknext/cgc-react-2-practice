import React from "react";
import Cities from "../components/Cities";
import Header from "../components/Header";
import Persons from "../components/Persons";
import Sidebar from "../components/Sidebar.jsx";
import { Route, Switch } from "react-router-dom";
import PersonForm from "../components/PersonForm";
import "./dashboard.css";
import Products from "../components/Products";
import Categories from "../components/Categories";
import Transactions from "../components/Transactions";
import DashboardPanel from "../components/DashboardPanel";

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
						<Route path={`${props.match.path}/`} component={DashboardPanel} />
						<Route
							path={`${props.match.path}/persons/new`}
							component={PersonForm}
						/>
						<Route path={`${props.match.path}/persons`} component={Persons} />
						<Route path={`${props.match.path}/products`} component={Products} />
						<Route
							path={`${props.match.path}/transactions`}
							component={Transactions}
						/>
						<Route
							path={`${props.match.path}/categories`}
							component={Categories}
						/>
					</Switch>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Dashboard;
