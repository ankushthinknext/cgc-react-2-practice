import React from "react";
import sidebarLinks from "./sidebarlinks";

function Sidebar() {
	return (
		<div className="m-sidebar">
			{sidebarLinks.map((link) => (
				<div className="sidebar-links" key={link.id}>
					<h4>{link.icon}</h4>
					<h5>{link.label}</h5>
				</div>
			))}
		</div>
	);
}

export default Sidebar;
