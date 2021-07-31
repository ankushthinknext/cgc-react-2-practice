import React, { useContext } from "react";
import { CartContext } from "../App";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Popover from "@material-ui/core/Popover";
import { Avatar, List, ListItem } from "@material-ui/core";

export default function Header() {
	let { cartItems } = useContext(CartContext);

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const StyledBadge = withStyles((theme) => ({
		badge: {
			right: -3,
			top: 13,
			border: `2px solid ${theme.palette.background.paper}`,
			padding: "0 4px",
		},
	}))(Badge);

	return (
		<header className="m-navbar py-2 px-3">
			<ul className="left-nav"></ul>
			<ul className="right-nav">
				<li>
					<IconButton aria-label="cart">
						<StyledBadge badgeContent={cartItems.length} color="secondary">
							<ShoppingCartIcon />
						</StyledBadge>
					</IconButton>
				</li>
				<li>
					<Avatar onClick={handleClick}>AK</Avatar>
					<Popover
						id={id}
						open={open}
						anchorEl={anchorEl}
						onClose={handleClose}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "center",
						}}
						transformOrigin={{
							vertical: "top",
							horizontal: "center",
						}}>
						<List>
							<ListItem>Setting</ListItem>
							<ListItem>Account</ListItem>
							<ListItem>Logout</ListItem>
						</List>
					</Popover>
				</li>
			</ul>
		</header>
	);
}
