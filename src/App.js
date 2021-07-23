import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import Cities from "./components/Cities";

import Counter from "./components/Counter";
import Counters from "./components/Counters";
import FunCounter from "./components/FunCounter";
import FunCities from "./components/FunCities";
import Title from "./components/Title";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Person from "./components/Person";
import NotFound from "./components/NotFound";
import Dashboard from "./screens/Dashboard";
import Login from "./components/Login";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/dashboard" component={Dashboard}></Route>
				<Route path="/login" component={Login}></Route>
				<Route
					path="/cities"
					render={(props) => <FunCounter name="hello" {...props} />}
				/>
				<Route path="/persons/new" exact component={PersonForm} />
				<Route path="/persons/update/:id" exact component={PersonForm} />
				<Route path="/persons/" component={Persons} />
				<Route path="/person/:id?" component={Person} />
				<Route path="/counter" component={Counter} />
				<Route path="/home" component={Home} />
				<Route path="/page-not-found" component={NotFound} />
				<Redirect from="/" to="page-not-found" />
			</Switch>
		</div>
	);
}

export default App;
