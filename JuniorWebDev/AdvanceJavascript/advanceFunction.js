//Advance function 
const first = () => {
	const greet = 'Hi';
	const second = () => {
		alert(greet);
	}
	return second;
}


var newFunc = first(); 
newFunc();



//Closures - a function ran, the function exected It's never getting ran again.
//But it's going to remember that there area referemnces to those variable 
//So the child scope will always have access to the parent scope.


//Currying 
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a* b;
curriedMultiply(3)(4)

//Compose 
const compose = (f,g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

//Avoiding Side Effects and Functional Purity. 
 var a = 1;
 function b() {
 	a = 2;
 }

//Deterministic
