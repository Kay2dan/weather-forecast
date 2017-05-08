
const getWeather = ( city, country ) => {
	let key = "625d154fdbf5f48883b6200b2d213b57";
	let queryPath = `http://api.openweathermap.org/data/2.5/forecast?q=${ city },${ country }&APPID=${ key }&mode=json`
	console.log( "queryPath is...", queryPath );
	return new Promise(( resolve, reject ) => {
		fetch( queryPath )
			.then(( response ) => response.json( ))
			.then(( data ) => {
				console.log( "data is...", data );
				resolve( data );
			})
			.catch(( err ) => {
				reject( err );
				console.log( err );
			})

	});
};

export default getWeather;