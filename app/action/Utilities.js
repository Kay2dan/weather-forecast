
export const addDaysToDate = function( daysToAdd ) {
	let date = new Date();
	console.log( "parseInt days", parseInt( daysToAdd ) );
	return date + parseInt( daysToAdd );
 };

