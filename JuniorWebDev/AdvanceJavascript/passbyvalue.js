//Pass by Value vs Pass by Reference

var a = 5; 
var b = a;

b ++;

console.log(a)
console.log(b)





//objects 
let obj1 = { name: 'Yao',  password: '123'}
let obj2 = obj1;

obj2.password = 'easypeasy';
console.log(obj1)
console.log(obj2)




//Array example 

var c = [1,2,3,4,5];
var d= [].concat(c);

d.push(1234542435324);
console.log(d)
console.log(c)




let obj = {a:'a', b:'b', c:{deep:'try and copy me'}};
let clone = Object.assign({}, obj);
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj));
obj.c = 5; 
console.log(clone2);
console.log(superClone)