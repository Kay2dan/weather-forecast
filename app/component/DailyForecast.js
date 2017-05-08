import React from "react";
import ThreeHourForecast from "./ThreeHourForecast";
import { addDaysToDate } from "../action/Utilities";

const DailyForecastContainer = ({ forecastData, dayNum }) => {
	let date = addDaysToDate( dayNum );
	let shortenDate = date.toString().substring( 0, 15 );
	let ThreeHourForecastEle = forecastData.map(( timeForecast, i ) => {
		return(
			<ThreeHourForecast timeData = { timeForecast }
									 key = { `${ i }time` } />
		);
	})
	return(
		<div className = "dayForecastContainer">
			<h2 className = "dateHeading">
				{ shortenDate }
			</h2>
			{ ThreeHourForecastEle }
		</div>
	);
};

export default DailyForecastContainer;