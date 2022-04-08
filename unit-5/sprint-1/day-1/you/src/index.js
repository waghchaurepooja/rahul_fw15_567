
//import {sum} from "./calc" // --> it will not work because Node.js does't support import because it is not a part of ES6

// But now for some time we use require

const {sum,mult} = require("./calc");
// We don't able to see console.log() in browser console.log() because require() is a Node.JS syntax not a JavaScript syntax and here we don't use Node.JS

console.log(sum(4,4));
console.log(mult(4,4));
console.log(sum(4,4));
console.log(mult(4,4));
console.log(sum(4,4));

import "./index.css";

// import logo from "./logo.jpg";

// Now I Create Element Here like -->

const root = document.querySelector("#root");
// It get div from bundle.js because we bundle it in bundle.js

const h1 = document.createElement("h1");
h1.innerHTML = "Hello World";
h1.setAttribute("class","redtext")
root.append(h1);

// Now we need css file