import React from "react";

const ThreeHourForecast = ({ timeData }) => {
	let mainData = timeData.main;
	return(
		<div className = "hourFC">
			<div className = "tempFC">
				<span className = "title">
					temp : 
				</span>
				<span className = "value">
					{ mainData.temp }
				</span>
			</div>
			<div className = "humidityFC">
				<span className = "title">
					humidity :  
				</span>
				<span className = "value">
					{ mainData.humidity }
				</span>
			</div>
			<div className = "maxTemp">
				<span className = "title">
					max_temp : 
				</span>
				<span className = "value">
					{ mainData.temp_max }
				</span>
			</div>
		</div>
	);
};

export default ThreeHourForecast;