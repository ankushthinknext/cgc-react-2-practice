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
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Person from "./components/Person";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/cities" component={FunCounter} />
				<Route path="/persons/new" exact component={PersonForm} />
				<Route path="/persons/update/:id" exact component={PersonForm} />
				<Route path="/persons/" component={Persons} />
				<Route path="/person/:id?" component={Person} />
				<Route path="/counter" component={Counter} />
				<Route path="/" component={Home} />
			</Switch>
		</div>
	);
}

export default App;
