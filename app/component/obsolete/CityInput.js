import React from "react";


class CityInput extends React.Component {

	constructor( props ){
		super( props );
		this.state = {
			city : "",
			country : ""
		};
		// this.setChangeType = this.setChangeType.bind( this );
		this.onChange = this.onChange.bind( this );
		this.onEnter = this.onEnter.bind( this );
	}

	setChangeType( cityOrCountry ){
		let vari = cityOrCountry;
		return this.onChange;
	}

	onChange( e ){
		console.log( "onchange fired!", vari, cityOrCountry );
		console.log( "e.target.value", e.target.value );
		this.setState({
			[ cityOrCountry ] : e.target.value
		})
	}

	onEnter( e ){
		e.preventDefault();
		console.log( "form value is...", this.state );
		let data = `${ this.state.city },${ this.state.country }`
		this.props.getWeather( data );
	}

	render(){
		return(
			<form onSubmit = { this.onEnter }>
				<label>
					City : 
					<input type = "text"
							 name = "cityName"
							 placeholder = "london"
							 value = { this.state.city }
							 onChange = { this.setChangeType( "city" )} />
				</label>
				<label>
					Country :
					<input type = "text"
							 name = "countryName"
							 placeholder = "uk"
							 value = { this.state.country }
							 onChange = { this.setChangeType( "country" )} />
				</label>
				<input type = "submit"
						 value = "search" />
			</form>
		);
	}
};

export default CityInput;