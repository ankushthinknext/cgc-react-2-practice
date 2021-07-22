import React from "react";

export default function Header() {
	return (
		<header className="m-navbar py-2 px-3">
			<ul className="left-nav">
				<li>Home</li>
				<li>About Us</li>
				<li>Products</li>
				<li>Service</li>
			</ul>
			<ul className="right-nav">
				<li>Orders</li>
				<li>login</li>
				<li>Sign up</li>
			</ul>
		</header>
	);
}
