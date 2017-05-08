import React from "react";

class InputField extends React.Component{

	constructor( props ){
		super( props );
		this.state = {
			[ props.valueType ] : ""
		}
		this.onChange = this.onChange.bind( this );
	}

	onChange(){
		
	}

	render(){
		let type = this.props.valueType;
		return(
			<label>
				this.props.txt 
				<input type = "text"
						 placeholder = { this.props.cityName }
						 value = { this.state[ type ]}
						 onChange = { this.onChange } />
			</label>
		);
	}
}