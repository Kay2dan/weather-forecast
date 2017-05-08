import "../css/main.css";
import React from "react";
import { render } from "react-dom";
import Main from "./component/Main";

let initialise = () => {
	let containerDiv = document.createElement( "div" );
	containerDiv.id = "app";
	document.body.appendChild( containerDiv );
	render(
		<Main />,
		containerDiv
	);
};

initialise();
