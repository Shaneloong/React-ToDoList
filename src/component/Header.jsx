import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
export function Header() {
	return (
		<header className="d-flex align-items-center">
			<h1>
				<HighlightIcon sx={{ fontSize: 40}} />
				To Do List App
			</h1>
		</header>
	)
}