//  el.addEventListener('click', submitForm);

//  //callback pyramid of doom 
// movePlayer(100, 'Left', fucntion () {
// 	movePlayer(400, 'Left', function () {
// 		movePlayer(10. 'Right', fucntion() {
// 			movePlayer(330, 'Left', function() {

// 			});
// 		});
// 	});
// });


// grabTweets('twitter'/mitchellbrowwn, (error, mitchellTweets) => {
// 	if(error) { 
// 		throw Error
// 	}
// 	displayTweets(mitchellTweets) 
// 	grabTweets('twitter/elonmusk', (error, elonTweets) => {
// 		if(error) {
// 			throw Error;
// 		}
// 	displayTweets(elonTweets) 
// 	grabTweets('twitter/vitalikbuterin' , (error, vitalikTweetts) =>{
// 		if(error) { 
// 			throw Error;
// 		}
// 		displayTweets(vitalikTweetts)
// 	  }
// 	}
// }



// movePlayer(100, 'Left')
// .then(() => movePlayer(400, 'Left'))
// .then(() => movePlayer(10, 'Right'))
// .then(() => movePlayer(330, 'Left'))

const promise = new Promise((resolve, reject) => {
	if(true) {
		resolve('Stuff Worked')
	} else {
		reject('Error, it broke')
	}
})

const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, 'HIII')
})


const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolvee, 1000, 'POOOKIE')
})

const promise4 = new Promise((resolve, reject) => {
	setTimeout(resolvee, 3000, 'you found me')
})


Promise.all([promise, promise2, promise3, promise4])
.then(values => {
	console.log(values);
})


promise
.then(result => result + '!')
.then(result => result2 + '?')
.catch(() => console.log('errror!'))
.then(result3 => {
	console.log(result3 + '!');
})
