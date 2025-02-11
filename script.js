const obs=150;
let username = prompt("Enter your name");

let english = prompt("Enter your English marks: ");
let english_mark=Number(prompt('Enter your mark'));

let urdu = prompt("Enter your Urdu marks: ");
let urdu_mark=Number(prompt('Enter your mark'));

let math = prompt("Enter your Math marks: ");
let math_mark=Number(prompt('Enter your mark'));



let total = english_mark+urdu_mark+math_mark;
let per = (obs/total * 100);

console.log("Student Name: " + username);
console.log("Total Marks: " + total);
console.log("Marks Obtained: " + obs);
console.log("subject: " + math +"  "+urdu+"  "+"  "+english);




