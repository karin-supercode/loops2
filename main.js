console.log("%cAufgabe: 1_1 for loop Hello World", "color: green");

// for loop Hello World

for (let a = 1; a <= 10; a++) {
  console.log("Hello World mit For Loop " + a);
}

console.log("%cAufgabe: 1_2 for loop Array", "color: green");

let nummArray = [];
for (let b = 0; b <= 10; b++) {
  console.log(b);
  nummArray.push(b);
  console.log(nummArray);
}

console.log("%cAufgabe: ---------------------------------------", "color: green");
console.log("%cAufgabe: 1_3 while loop Hallo World", "color: green");
// for while loop Hello World

let counter = 0;
console.log(counter);
while (counter < 10) {
  console.log("hallo Welt mit While Loop " + counter);
  counter++;
}

console.log("%cAufgabe: ---------------------------------------", "color: green");
console.log("%cAufgabe: 1_4 for loop Namen", "color: green");
// for while loop Namen

let names = ["Eric", "Steffen", "Finn", "Simon", "Franzi", "Kim", "Sergio"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log("%cAufgabe: ---------------------------------------", "color: green");
console.log("%cAufgabe: 1_5 for loop objects", "color: green");
// for while loop Namen
var apple1 = { color: "red", size: "big" };
var apple2 = { color: "green", size: "small" };
var apple3 = { color: "yellow", size: "big" };
var apples = [apple1, apple2, apple3];

for (let i = 0; i < apples.length; i++) {
  const element = apples[i];
  console.log(apples[i].size);
}

console.log("%cAufgabe: ---------------------------------------", "color: green");
console.log("%cAufgabe: 1_6 for loop Array", "color: green");
// for while loop Array

let retArray = [];
for (let i = 1; i < 101; i++) {
  retArray.push("image_" + i + ".jpg");
}
console.log(retArray);

console.log("%cAufgabe: ---------------------------------------", "color: green");
console.log("%cAufgabe: 1_7 do while", "color: green");
// do while
let x = 1;
do {
  console.log("The number is " + x);
  x++;
} while (x < 6);

console.log("%cAufgabe: ---------------------------------------", "color: green");
console.log("%cAufgabe: 1_8 do while", "color: green");
// do while - jede gerade Zahl

let y = 1;
do {
  y++;
  if (y % 2 == 0) console.log("ausgabe" + y);
} while (y < 21);

console.log("%cAufgabe: ---------------------------------------", "color: green");
console.log("%cAufgabe: 1_9 loops mit input word", "color: green");

let words = ["hallo", "Auto", "Waschmaschine", "Schrank", "Katze", "Beispiel", "Eltern", "Fenster", "Geburtstag", "Himmel", "schwimmen", "Zeitung"];

let inputWord = document.getElementById("inputWord");
let wordAusgabe = document.getElementById("wordAusgabe");

console.log(words[2].length);

function drucken() {
  console.log(inputWord);
  // for (let e = 0; e < words.length; e++) {
  //   console.log(words[e].length);
  //   if (words[e].length == inputWord.length) {
  //     console.log("yeah");
  //   } else {
  //     console.log("nope");
  //   }
  // }
}

// if (words.length == 12) {
//   wordAusgabe.innerHTML = "text bei if"
// } else {
//     wordAusgabe.innerHTML = "text bei else";

// }
