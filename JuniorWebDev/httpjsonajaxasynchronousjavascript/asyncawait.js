// movePlayer(100, 'Left')
//  .then(() => movePlayer(400, 'Left'))
//  .then(() => movePlayer(10, 'Right'))
//  .then(() => movePlayer(330, 'Left'))

// async function playerStart() {
// 	const firstMove - await movePlayer(100, 'Left');
// 	const second =await movePlayer(400, 'Left');
// 	await movePlayer(10, 'Right');
// 	await movePlayer(330, 'Left');
// }

fetch('https://jsonplaceholder.typicode.com/albums')
.then(resp => resp.json())
.then(console.log)



async function fetchUsers() {
 const resp = await fetch('https://jsonplaceholder.typicode.com/albums')
 const data = await resp.json()
 console.log(data);
}

Promise.all(urls.map(url => {
	return fetch(url).then(resp => resp.json())
})).then(results => {
	console.log(results[0])
	console.log(results[1])
	console.log(results[2])
})

const urls  = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/albums',
	'https://jsonplaceholder.typicode.com/posts'
]

const getData = async function() {
	try {
		const [users, albums, posts] = await Promise.all(urls.map(url =>
		fetch(url).then(resp => resp.json())
		))
		console.log('users', users)
		console.log('albums', albums)
		console.log('posts', posts)
	} catch {
		console.log('Ohhhhh shiiiiiiiit', err)
	}
 }