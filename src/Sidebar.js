import React from "react";
import "./Sidebar.css";

// material ui
import DonutLarge from "@material-ui/icons/DonutLarge";
import Chat from "@material-ui/icons/Chat";
import MoreVert from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from "./SidebarChat";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar_header">
				<Avatar src="https://i.pinimg.com/280x280_RS/c5/db/7f/c5db7f245e3cd39c4d6c518dafa97e59.jpg" />
				{/*  */}
				<div className="sidebar_headerRight">
					{/* For the icons below we are going to 
					wrap each icon inside IconButton. 
					As a result, when the icon is hovered over and clicked 
					it will have a little animation */}
					<IconButton>
						<DonutLarge />
					</IconButton>
					{/*  */}
					<IconButton>
						<Chat />
					</IconButton>
					{/*  */}
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>
			{/*  */}
			<div className="sidebar_search">
				<div className="sidebar_searchContainer">
					<SearchOutlined />
					<input placeholder="search or start new chat" type="text" />
				</div>
			</div>
			{/*  */}
			<div className="sidebar_chats">
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
			</div>
		</div>
	);
}

export default Sidebar;
