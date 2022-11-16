//partea de javaScript

console.log("Hello");
let name;
let scor=50;
name='Horatiu'
console.log(name);
const color='red';
console.log(color);
let points=8;
if(points==100)
    console.log("Ai castigat");
else
    console.log("Mai incearca");
for(let i=1; i<=10;i++){
        console.log(i);
}
while(points<=10){
    console.log("Hello");
    points++;
}
let x=[1,2,3];
x[3]=x[0]+x[2];
console.log(x[3]/x[1]);
let user;
function login(user){
    console.log("hi, "+user);
}
function dublu(scor){
    scor*=2;
    console.log(scor);
}

function myFunction(){
    document.getElementById("demo").innerHTML="Cel mai tare site";
}