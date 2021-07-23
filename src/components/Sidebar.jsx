import React from "react";
import sidebarLinks from "./sidebarlinks";
import { Link } from "react-router-dom";

function Sidebar() {
	return (
		<div className="m-sidebar">
			{sidebarLinks.map((link) => (
				<Link to={`/dashboard${link.path}`} key={link.id}>
					<div className={`sidebar-links`}>
						<h4>{link.icon}</h4>
						<h5>{link.label}</h5>
					</div>
				</Link>
			))}
		</div>
	);
}

export default Sidebar;
