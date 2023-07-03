import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
const NHeading = styled("h3")({
	marginRight: "1rem",
});
export default function Navbar() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Link style={{ textDecoration: "none" }} to="/">
					<NHeading style={{ color: "black" }}>Home</NHeading>
				</Link>
				<Link style={{ textDecoration: "none" }} to="/see">
					<NHeading style={{ color: "black" }}> See lists</NHeading>
				</Link>
			</Toolbar>
		</AppBar>
	);
}
