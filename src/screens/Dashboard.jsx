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
import Users from "../components/Users";
import UserForm from "../components/UserForm";

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
						<Route
							exact
							path={`${props.match.path}/users/new`}
							component={UserForm}
						/>
						<Route exact path={`${props.match.path}/users`} component={Users} />
						<Route path={`${props.match.path}/products`} component={Products} />
						<Route
							path={`${props.match.path}/transactions`}
							component={Transactions}
						/>
						<Route
							path={`${props.match.path}/categories`}
							component={Categories}
						/>
						<Route path={`${props.match.path}/`} component={DashboardPanel} />
					</Switch>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Dashboard;
