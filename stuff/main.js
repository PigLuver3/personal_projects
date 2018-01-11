// alt+t to acess terminal
// "node stuff/main.js" to run code
console.log("test");
var b = ""; //b stands for blank
var array = [1, 2, 3]
console.log(array);
array.push(4);
array.push(5);
array.push(6);
console.log(array);
function hello() {
    console.log("hi (:");
}
hello();
function hello(name) {
    console.log("hi " + name + " (:");
}
hello("dude");
hello(b);
for(var i = 0; i < 3; i++)
    console.log("loop" + (i + 1));