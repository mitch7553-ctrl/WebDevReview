//Advance Loops 
const basket = ['apples', 'oranges', 'grapes']
 const detailedBaskets = {
 	apples: 5,
 	oranges: 10,
 	grapes:1000
 }
for ( let i = 0; i < basket.length; i++) {
	console.log(basket[i]);
}


basket.forEach( item => {
	console.log(item);
})



// for of 
//iterating 
for (item of detailedBaskets)  {
	console.log(item);
}

// for in 
//enumerating - objects 
for (item in basket )  {
	console.log(item);
}


