//Debugging 
// first step in debugging, always read the code. 

const flattened = [[0,1], [2,3], [4,5]].reduce ( 
	(accumulator,array) =>  {
		debugger;
		console.log('array', array);
		console.log('accumulator', accumulator);
		return accumulator.concat(array)

}, []);