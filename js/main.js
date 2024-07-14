// window.alert("hello from avaya"); (an alert should be shown when you open the page)

// document.write(<h2>Hello page</h2>); (to add an element to the page but it's not using that way)

// console.log("hello from js file"); (to just print in console)

// console.error("hello avaya from JS file"); to print the output as an error in console

// console.table(["Ahmed", "Raaft", "gaber"]);

// console.log("%cHello from file js " , "color:red; font-size:40px"  );

// %c directive it can be used before the text which you want to give it a style
// Console is a property of Web Api (Application Programming Interface.) and javasript is taken that from WEB API

// ECMA 6 , ES6 المعايير

// //////////////////////////////////////////////////////////////////

// window.alert("hello from JS file");
// document.write("<h2>For test</h2>");
// console.log("hello from our main file");
// console.table(["hello", "ahmed", "table"]);
// console.error("clear the error");
// console.log("%cAhmed%cRaaft" , "color:blue; font-size:20px ", "color:red; font-size:20px");

// how to print an element inside the web page itself

// document.write("<h1>Free</h1>"); 
// document.querySelector("h1").style.color = "red";
// document.querySelector("h1").style.fontSize = "80px";
// document.querySelector("h1").style.fontWeight = "bold";
// document.querySelector("h1").style.textAlign = "center";
// document.querySelector("h1").style.fontFamily = "Arial";

// console.log("%cerror %c of %cerror", "color:red; font-size: 40px;", "color:green; font-size:40px; font-weight:bold;" , "color:white; font-size:40px; background-color:blue;  "); 

// console grouping 


// console.log("Hello world!");
// console.group();
// console.log("Hello again, this time inside a group!");
// console.groupEnd();


// console.log("and we are back.");
// console.group(); 
// console.log("see the msg");
// console.groupEnd();

// // ending the console grouping 

// // table example 

// console.table(["Ahmed", "Raaft", "Gaber"]);
// console.table(["hello", "ahmed", "table"]);

// ending of requested table . 

//////////////////////////////////  type of data  //////////////////////////////////



/* 
- String should be between double cout " "
- number without double cout
- Array << Object
- Object
- Boolean
- undefined 
- null type of object
*/

//console.log("Ahmed Raaft"); 
//console.log(typeof "ahmed"); // string as long as between double or single quote
//console.log(typeof 500); // type of number 
//console.log(typeof ["ah", "ah", "ga"]); // type of object but it names array
//console.log(typeof [500, 200 , 400]); // type of object but it names array
//console.log(typeof {name: "ahmed", age: 20, country: "egypt"}); // type of aboject and called object as well
//console.log(typeof true); // type of boolean
//console.log(typeof false);
//console.log(typeof undefined);
//console.log(typeof null)

//console.table(["ahmed", "raaft", 500, "egypt"]);

//console.log(typeof "ahmed");
//console.log(typeof 500);

//console.log(typeof["ahmed", "raaft", "egypt"]);
//console.log(typeof{name: "ahmed", number: 500}); 


// /////////////// Variable /////////////

// to create a variable should be as the following (keyword which is responsible about the variable var) + var name + assignment operator = + var value
/*

var user = "raaft", age = 80;
var name =  "gaber";

console.log(user); 
console.log(age);
console.log(name);
console.log (next);

// losely type language VS strongly type language <<<<<<  Search requested 

*/


//////////////////// Identiefier name //////////

// it can be start with number however, number can be included in the center of var or end of it , cannot be included a space like (na me)
// it can be start with underscore and it can be anywhere of the var , as well as the same with dollar sign
// special char cannot be included anywhere as well as the words which are already booked to the system like (var, con)
// the best practice to writ the var is camelCae (userName)

////////////////////////////////////////////

/*
var 
- redeclare (it can be accepted by var)
var a = 1;
var a = 2;

- Acess before declare (undefiend)

- Varriable scope drama (it added to window scope)




let 
- redeclare (NO << error)

- Acess before declare (error)

- Varriable scope drama (it's not added to window scope)

const 

- redeclare (NO << error) 

- Acess before declare (error)

- Varriable scope drama (it's not added to window scope)
*/






