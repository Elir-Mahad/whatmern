import React from "react";
import "./Sidebar.css";

// material ui
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";

function Sidebar() {
	return (
		<div className="sidebar">
			<h1>Side bar</h1>
			<div className="sidebar_header">
				<div className="sidebar_headerRight">
					<IconButton>
						{/* When you wrap an icon inside IconButton, 
						when the icon is hovered over and clicked 
						it will have a little animation */}
						<DonutLargeIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
