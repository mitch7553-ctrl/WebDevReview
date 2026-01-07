//.scope 

//root scope 
var fun = 5;

function funFunction() {
	//child scope 
	var fun = "hello";
	console.log(1,fun);
}

function funerFunction() {
	//child scope
	var fun = "bye";
	console.log(2, fun);
}


function funestFunction() {
	//child scope
	var fun = "Ahhhhh";
	console.log(3, fun);
}


console.log("window", fun);
funFunction();
funerFunction();
funestFunction();