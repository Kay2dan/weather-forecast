import React from "react";
import getWeather from "../action/getWeather";
import Main from "./Main";

// Higher order component
const MainContainer = () => {
	var weather = getWeather( "london", "uk" )
		.then(( data ) => {
			console.log( "data in maincontainer is...", data );
			return <Main />;
		});
}

export default MainContainer;