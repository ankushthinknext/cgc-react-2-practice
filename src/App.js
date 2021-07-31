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
import axios from "./components/config/axiosConfig";
import React, { useState, useEffect } from "react";

export const CartContext = React.createContext();
export const SettingContext = React.createContext();

function App() {
	const [cartItems, setCartItems] = useState([]);
	const [allProducts, setAllProducts] = useState(null);
	const [settings, setSettings] = useState(null);
	const updateCartItems = (id) => {
		let index = cartItems.findIndex((item) => item._id === id);
		if (index === -1) {
			let product = allProducts.find((product) => product._id === id);
			product.qty = 1;
			product.price = +product.price;
			setCartItems([...cartItems, product]);
		} else {
			let newCartItems = [...cartItems];
			newCartItems.splice(index, 1);
			setCartItems(newCartItems);
		}
	};
	const deleteCartItem = (id) => {
		let index = cartItems.findIndex((item) => item._id === id);
		let newCartItems = [...cartItems];
		newCartItems.splice(index, 1);
		setCartItems(newCartItems);
	};
	const deleteAllCartItems = (params) => {
		setCartItems([]);
	};

	const updateQuantity = (id, type) => {
		let index = cartItems.findIndex((item) => item._id === id);
		let updatedCart = [...cartItems];
		if (type === "increment") {
			updatedCart[index]["qty"]++;
			setCartItems(updatedCart);
			return;
		} else if (type === "decrement") {
			if (updatedCart[index]["qty"] === 1) return;
			updatedCart[index]["qty"]--;
			setCartItems(updatedCart);
		}
	};

	async function verifyToken(token) {
		let result = await axios(`auth/checktoken`);
		return result.status === 200;
	}

	useEffect(() => {
		axios("product?limit=100000").then((result) =>
			setAllProducts(result.data.data.products),
		);
		axios("setting").then((result) => setSettings(result.data.data));
	}, []);
	return (
		<div className="App">
			<CartContext.Provider
				value={{
					cartItems,
					updateCartItems,
					updateQuantity,
					deleteCartItem,
					deleteAllCartItems,
				}}>
				<SettingContext.Provider value={settings}>
					<Switch>
						<Route
							path="/dashboard"
							render={(props) => {
								let token = localStorage.getItem("token");
								if (token && verifyToken(token))
									return <Dashboard {...props} />;
								return <Redirect to="/login" />;
							}}></Route>
						<Route path="/login" component={Login}></Route>
						<Route path="/home" component={Home} />
						<Route path="/page-not-found" component={NotFound} />
						<Redirect from="/" to="page-not-found" />
					</Switch>
				</SettingContext.Provider>
			</CartContext.Provider>
		</div>
	);
}

export default App;
