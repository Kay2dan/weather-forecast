import React from "react";


const cityHeading = ({ city, country }) => {
	return(
		<h1 className = "cityHeading">
			{ `${ city }, ${ country }` }
		</h1>
	);
};

export default cityHeading;