import React from "react";
import sidebarLinks from "./sidebarlinks";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
	const urlTokens = useLocation().pathname.split("/");

	return (
		<div className="m-sidebar">
			{sidebarLinks.map((link) => (
				<Link to={`/dashboard/${link.path}`} key={link.id}>
					<div
						className={`sidebar-links ${
							urlTokens.includes(link.path) ? "active" : ""
						}`}>
						<h4>{link.icon}</h4>
						<h5>{link.label}</h5>
					</div>
				</Link>
			))}
		</div>
	);
}

export default Sidebar;
