import React from "react";
import getWeather from "../action/getWeather";
import CityHeading from "./CityHeading";
import DailyForecastContainer from "./DailyForecast";


class Main extends React.Component {

	constructor( props ){
		super( props );
		this.state = {};
		this.renderCityAndCountry = this.renderCityAndCountry.bind( this );
		this.sortDailyForecast = this.sortDailyForecast.bind( this );
	}

	renderCityAndCountry(){
		return <CityHeading
					city = { this.state.city.name }
					country = { this.state.city.country } />;
	}


	sortDailyForecast(){
		let weatherData = this.state.list;
		let dayArray = [[],[],[],[],[]]; // stores all data sorted into 5 days forecast
		let todayDate = new Date().getDate() // get today's date
		weatherData.forEach(( timeIntervalObj ) => {
			let date = new Date( timeIntervalObj.dt_txt ).getDate();
			switch( date ){
			case( todayDate ):
				return dayArray[ 0 ].push( timeIntervalObj );
			case( todayDate + 1 ):
				return dayArray[ 1 ].push( timeIntervalObj );
			case( todayDate + 2 ):
				return dayArray[ 2 ].push( timeIntervalObj );
			case( todayDate + 3 ):
				return dayArray[ 3 ].push( timeIntervalObj );
			case( todayDate + 4 ):
				return dayArray[ 4 ].push( timeIntervalObj );
			}
		});
		return this.renderDailyForecast( dayArray );
	}

	renderDailyForecast( dayArr ){
		return dayArr.map(( eachDayData, i ) => 
			<DailyForecastContainer forecastData = { eachDayData }
											dayNum = { i }
											key = { i } />
		)
	}

	componentDidMount(){
		let weather = getWeather( "london", "uk" )
			.then(( data ) => {
				this.setState( data );
			});
	}

	render(){
		return(
			<div className = "main">
				{ this.state.city ? this.renderCityAndCountry() : "" }
				{ this.state.city ? this.sortDailyForecast() : "" }
			</div>
		);
	}

}

export default Main;