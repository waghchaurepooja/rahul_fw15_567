// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import './App.css';

// function App() {
//   return (
//     <div className="App">Hello</div>
//   );
// }

// export default App;

// import './App.css';

// // difference between js and jsx
// // change App.js to App.jsx for auto suggestion

// function App() {
//   return (
//     <div className="App">Hello</div>
//   );
// }

// export default App;

// import './App.css';

// difference between js and jsx
// change App.js to App.jsx for auto suggestion

// function App() {

//   return (
//     <div className="App">
//       <h1>Test</h1>
//     </div>
//   );

// }
// // Hooks --> 

// // instead of here write components we will write in another folder
// export default App; 

// import './App.css';

// import { Category } from "./components/category";
// console.log(Category);
// function App() {

//   return (
//     <div className="App">
//       <Category />
//     </div>
//   );

// }
// // Hooks --> 

// // instead of here write components we will write in another folder
// export default App; 

// import './App.css';

// import { Category } from "./components/category";
// console.log(Category);
// function App() {
//   const navbar = 
//   [
//     {
//       image : "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
//       title : "Top Offers",
//     },
//     {
//       image : "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
//       title : "Grocery"
//     }
//   ]
//   return (
//     <div className="App">
//       <Category />
//     </div>
//   );

// }

// // Hooks --> 

// // instead of here write components we will write in another folder
// export default App; 

// import './App.css';

// import "./components/category.css"

// import { Category } from "./components/category";
// console.log(Category);
// function App() {
//   const navbar = 
//   [
//     // props -->
//     {
//       image : "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
//       title : "Top Offers",
//     },
//     {
//       image : "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
//       title : "Grocery"
//     },
//     {
//       image : "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
//       title : "Top Offers",
//     },
//     {
//       image : "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
//       title : "Grocery"
//     }
//   ]
//   return (

//     // parent
//     <div className="navbar">
//       {navbar.map(element =>
//         // console.log('element:', element),
//         <Category image = {element.image} label = {element.title} />  
//       )}
//     </div>
//   );

// }

// // Hooks --> 

// // instead of here write components we will write in another folder
// export default App;

// import './App.css';

// import "./components/category.css"

// import { Category } from "./components/category";
// import {counter} from "./components/counter";
// console.log(Category);
// function App() {
//   return (

//     <div className="App">
//       <h3>Counter : 0</h3>
//       <button>Add 1</button>
//     </div>

//   );

// }

// // Hooks --> 

// // instead of here write components we will write in another folder
// export default App; 

// import './App.css';

// import "./components/category.css"

// import { Category } from "./components/category";
// import {counter} from "./components/counter";
// console.log(Category);
// function App() {
//   return (

//     <div className="App">
//       <h3>Counter : 0</h3>
//       <button onClick={}>Add 1</button>
//       {/* 
//         onChange,onLoad,onKeyUp,onKeyDown
//       */}
//     </div>

//   );

// }

// // Hooks --> 

// // instead of here write components we will write in another folder
// export default App; 

// import './App.css';

// import "./components/category.css"

// import { Category } from "./components/category";
// // import {counter} from "./components/counter";
// console.log(Category);
// function App() {
//   return (

//     <div className="App">
//       <h3>Counter : 0</h3>
//       <button onClick={() =>{

//         console.log("button");

//       }}>Add 1</button>
//       {/* 
//         onChange,onLoad,onKeyUp,onKeyDown
//       */}
//     </div>

//   );

// }

// // Hooks --> 

// // instead of here write components we will write in another folder
// export default App; 



// import './App.css';

// import "./components/category.css"

// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
  
//   // for increasing we need variable to increase
//   const count = 0;
//   return (

//     <div className="App">
//       <h3>Counter : {count}</h3>
//       <button onClick={() =>{

//         console.log("button");

//       }}>Add 1</button>
//       {/* 
//         onChange,onLoad,onKeyUp,onKeyDown
//       */}
//     </div>

//   );

// }

// // Hooks --> 

// // instead of here write components we will write in another folder
// export default App; 

// import './App.css';
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
  
//   // for increasing we need variable to increase
//   let count = 0;
//   return (

//     <div className="App">
//       <h3>Counter : {count}</h3>
//       <button onClick={() =>{

//         console.log("button");
//         count++;
//         console.log('count:', count)

//       }}>Add 1</button>
//       {/* 
//         onChange,onLoad,onKeyUp,onKeyDown
//       */}
//     </div>

//   );

// }

// // Hooks --> 

// // instead of here write components we will write in another folder
// export default App; 




// import './App.css';
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
  
//   // for increasing we need variable to increase
//   // what happening here we are try to change variable value but
//   // we did't tell to React that this is our count and it increase you find h3 and put increase count value
//   // how React assume that this is change or this is change
//   // these whole thing we will tell to React that this change please pick up it
//   // How to tell to React that this is change please pick up 
//   let count = 0;
//   return (

//     <div className="App">
//       <h3>Counter : {count}</h3>
//       <button onClick={() =>{

//         console.log("button");
//         count++;
//         console.log('count:', count)

//       }}>Add 1</button>
//       {/* 
//         onChange,onLoad,onKeyUp,onKeyDown
//       */}
//     </div>

//   );

// }
// // Hooks --> 
// // instead of here write components we will write in another folder
// export default App; 




// import './App.css';
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
//   // array destruturing -->
//   const [a,b] = useState;
//   return (

//     <div className="App">
//       <h3>Counter : {count}</h3>
//       <button onClick={() =>{

//         console.log("button");
//         count++;
//         console.log('count:', count)

//       }}>Add 1</button>
//       {/* 
//         onChange,onLoad,onKeyUp,onKeyDown
//       */}
//     </div>

//   );

// }
// // Hooks --> 
// // instead of here write components we will write in another folder
// export default App; 



// import './App.css';
// import {useState} from "react";
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {

//   // array destruturing -->
//   const [count] = useState();
//   return (

//     <div className="App">
//       <h3>Counter : {count}</h3>
//       <button onClick={() =>{

//         console.log("button");
//         count++;
//         console.log('count:', count)

//       }}>Add 1</button>
//       {/* 
//         onChange,onLoad,onKeyUp,onKeyDown
//       */}
//     </div>

//   );

// }
// // Hooks --> 
// // instead of here write components we will write in another folder
// export default App; 



// import './App.css';
// import {useState} from "react";
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {

//   // array destruturing -->
//   const [count] = useState(0);
//   return (

//     <div className="App">
//       <h3>Counter : {count}</h3>
//       <button onClick={() =>{

//         console.log("button");
//         count++;
//         console.log('count:', count)

//       }}>Add 1</button>
//       {/* 
//         onChange,onLoad,onKeyUp,onKeyDown
//       */}
//     </div>

//   );

// }
// // Hooks --> 
// // instead of here write components we will write in another folder
// export default App; 




// import './App.css';
// import {useState} from "react";
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {

//   // array destruturing -->
//   const [count] = useState(0);
//   const [name] = useState("Name");
//   return (

//     <div className="App">
//       <h3>Counter : {count}</h3>
//       <button onClick={() =>{

//         console.log("button");

//       }}>Add 1</button>
//       {/* 
//         onChange,onLoad,onKeyUp,onKeyDown
//       */}
//     </div>

//   );

// }
// // Hooks --> 
// // instead of here write components we will write in another folder
// export default App; 




// import './App.css';
// import {useState} from "react";
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
//   // array destruturing -->
  
//   // for increasing value of count we have initialise a variable called setCount
//   // and setCount is a function
//   const [Count, setCount] = useState(0);
//   return (

//     <div className="App">
//       <h3>Counter : {Count}</h3>
//       <button onClick={() =>{

//         console.log("button");

//       }}>Add 1</button>
//     </div>

//   );

// }
// export default App; 



// import './App.css';
// import {useState} from "react";
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
//   // array destruturing -->

//   const [Count, setCount] = useState(0);

//   // whenever we need to change Count or Name value then we tell to setCount or setName that you take value and send that value to Count and Name
//   // by this logic we value change in Count and Name by setCount and setName
//   // const [Name, setName] = useState("JavaScript");
//   return (

//     <div className="App">
//       <h3>Counter : {Count}</h3>
//       <button onClick={() =>{

//         console.log("button");
//         setCount(5);
        
//         // when we call the setCount function it send the value 5 to Count now React understand that value 5 give to Count variable

//       }}>Add 1</button>
//     </div>

//   );

// }
// export default App; 




// import './App.css';
// import {useState} from "react";
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
//   // array destruturing -->

//   const [Count, setCount] = useState(0);

//   // whenever we need to change Count or Name value then we tell to setCount or setName that you take value and send that value to Count and Name
//   // by this logic we value change in Count and Name by setCount and setName
//   // const [Name, setName] = useState("JavaScript");
//   return (

//     <div className="App">
//       <h3>Counter : {Count}</h3>
//       <button onClick={() =>{

//         console.log("button");
//         setCount(10);
        
//         // when we call the setCount function it send the value 5 to Count now React understand that value 5 give to Count variable

//       }}>Add 1</button>
//     </div>

//   );

// }
// export default App; 




// import './App.css';
// import {useState} from "react";
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
//   // array destruturing -->

//   const [Count, setCount] = useState(0);

//   // whenever we need to change Count or Name value then we tell to setCount or setName that you take value and send that value to Count and Name
//   // by this logic we value change in Count and Name by setCount and setName
//   // const [Name, setName] = useState("JavaScript");

//   // first value go to setCount like 1 then setCount send value to Count and in h3 tag take Count new value
  
//   // setName --> Name --> h3 tag
//   return (

//     <div className="App">
//       <h3>Counter : {Count}</h3>
//       <button onClick={() =>{

//         console.log("button");
//         setCount(Count + 1);
        
//         // when we call the setCount function it send the value 5 to Count now React understand that value 5 give to Count variable

//       }}>Add 1</button>
//     </div>

//   );

// }
// export default App; 




// import './App.css';
// import {useState} from "react";
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
//   // array destruturing -->
//   const [Count, setCount] = useState(0);

//   // How const change because const is mutable things
//   // Count is const variable but how it is change -->
//   // answer is we don't change Count value
//   // we re create Count variable with new value with the help of setCount and useState
//   // like first const Count = 0;

//   // after increase re Create variable like const Count = 1
//   // this is not do like that things like after increase Count = 1; (reassigning)
//   return (

//     <div className="App">
//       <h3>Counter : {Count}</h3>
//       <button onClick={() =>{

//         console.log("button");
//         setCount(Count + 1);
        
//         // when we call the setCount function it send the value 5 to Count now React understand that value 5 give to Count variable

//       }}>Add 1</button>
//     </div>

//   );

// }
// export default App; 




// import './App.css';
// import {useState} from "react";
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
//   // array destruturing -->
//   const [Count, setCount] = useState(0);
//   return (

//     <div className="App">
//       <h3>Counter : {Count}</h3>
//       {/* for increasing */}
//       <button onClick={() =>{

//         console.log("button");
//         setCount(Count + 1);

//       }}>Add 1</button>

//       {/* for decreasing */}
//       <button onClick={() =>{

//       console.log("button");
//       setCount(Count - 1);

//       }}>sub 1</button>
//     </div>

//   );

// }
// export default App; 




// import './App.css';
// import {useState} from "react";
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
//   // array destruturing -->
//   const [Count, setCount] = useState(0);
//   return (

//     // for stoping at 10
//     <div className="App">
//       <h3>Counter : {Count}</h3>
//       {/* for increasing */}
//       <button onClick={() =>{
//         console.log("button");
//         if(Count >= 10)
//         {
//           return;
//         }
//         setCount(Count + 1);

//       }}>Add 1</button>

//       {/* for decreasing */}
//       <button onClick={() =>{

//       console.log("button");
//       setCount(Count - 1);

//       }}>sub 1</button>
//     </div>

//   );

// }
// export default App; 



// import './App.css';
// import {useState} from "react";
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
//   // array destruturing -->
//   const [Count, setCount] = useState(0);
//   return (

//     <div className="App">
//       <h3>Counter : {Count}</h3>
//       {/* for stoping at 10 */}
//       {/* for increasing */}
//       <button onClick={() =>{
//         console.log("button");
//         if(Count >= 10)
//         {
//           return;
//         }
//         setCount(Count + 1);

//       }}>Add 1</button>

//       {/* for stoping at 0 */}
//       {/* for decreasing */}
//       <button onClick={() =>{
//       console.log("button");
//       if(Count <= 0)
//       {
//         return;
//       }
//       setCount(Count - 1);

//       }}>sub 1</button>
//     </div>

//   );

// }
// export default App; 




// import './App.css';
// import {useState} from "react";
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
//   // array destruturing -->
//   const [Count, setCount] = useState(0);
//   return (


//     // we want logic at another place like below html html then logic logic then html html then logic logic it create some mixing
//     <div className="App">
//       <h3>Counter : {Count}</h3>

//       {/* for stoping at 10 */}
//       {/* for increasing */}
//       <button onClick={() =>{
//         console.log("button");
//         if(Count >= 10)
//         {
//           return;
//         }
//         setCount(Count + 1);
//       }}>Add 1</button>

//       {/* for stoping at 0 */}
//       {/* for decreasing */}
//       <button onClick={() =>{
//       console.log("button");
//       if(Count <= 0)
//       {
//         return;
//       }
//       setCount(Count - 1);
//       }}>sub 1</button>
//     </div>

//   );

// }
// export default App; 



// import './App.css';
// import {useState} from "react";
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
//   // array destruturing -->
//   const [Count, setCount] = useState(0);

//   // we want logic at another place like below html html then logic logic then html html then logic logic it create some mixing
//   const handleAdd = () =>
//   {
//     console.log("button");
//     if(Count >= 0)
//     {
//       return;
//     }
//     setCount(Count + 1);
//   }
//   return (
//     <div className="App">
//       <h3>Counter : {Count}</h3>
//        it means we call the function not onClick call the function
//       <button onClick={handleAdd()}>Add 1</button>

//       {/* for stoping at 0 */}
//       {/* for decreasing */}
//       <button onClick={() =>{
//       console.log("button");
//       if(Count <= 0)
//       {
//         return;
//       }
//       setCount(Count - 1);
//       }}>sub 1</button>
//     </div>

//   );

// }
// export default App; 




// import './App.css';
// import {useState} from "react";
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
//   // array destruturing -->
//   const [Count, setCount] = useState(0);

//   // we want logic at another place like below html html then logic logic then html html then logic logic it create some mixing
//   const handleAdd = () =>
//   {
//     console.log("button");
//     if(Count >= 0)
//     {
//       return;
//     }
//     setCount(Count + 1);
//   }

//   const handleSub = () =>
//   {
//     console.log("button");
//     if(Count <= 0)
//     {
//       return;
//     }
//     setCount(Count - 1);
//   }
//   return (

//     <div className="App">
//       <h3>Counter : {Count}</h3>
//       <button onClick={handleAdd}>Add 1</button>
//       <button onClick={handleSub}>sub 1</button>
//     </div>

//   );

// }
// export default App; 





// import './App.css';
// import {useState} from "react";
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
//   // array destruturing -->
//   const [Count, setCount] = useState(0);

//   // we want logic at another place like below html html then logic logic then html html then logic logic it create some mixing
//   const handleChange = (value) =>
//   {
//     console.log('value:', value)
//     setCount(Count + value);
//   }
//   return (

//     <div className="App">
//       <h3>Counter : {Count}</h3>
//       {/* whenever we click on button onClick event invoke and onClick event invoke the () => this function and () => this function call our function which is handleChange() function internally */}
//       <button onClick={() => handleChange(1)}>Add 1</button>
//       <button onClick={handleChange}>sub 1</button>
//     </div>

//   );

// }
// export default App;






// import './App.css';
// import {useState} from "react";
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
//   // array destruturing -->
//   const [Count, setCount] = useState(0);

//   // we want logic at another place like below html html then logic logic then html html then logic logic it create some mixing
//   const handleChange = (value) =>
//   {
//     console.log('value:', value)
//     setCount(Count + value);
//   }
//   return (

//     <div className="App">
//       <h3>Counter : {Count}</h3>
//       {/* whenever we click on button onClick event invoke and onClick event invoke the () => this function and () => this function call our function which is handleChange() function internally */}
//       <button onClick={() => handleChange(1)}>Add 1</button>
//       <button onClick={() => handleChange(-1)}>sub 1</button>
//     </div>

//   );

// }
// export default App;






// import './App.css';
// import {useState} from "react";
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
//   // array destruturing -->
//   const [Count, setCount] = useState(0);

//   // we want logic at another place like below html html then logic logic then html html then logic logic it create some mixing
//   const handleChange = (value) =>
//   {
//     console.log('value:', value)
//     console.log('Count:', Count)
//     setCount(Count + value);
//   }
//   return (

//     <div className="App">
//       <h3>Counter : {Count}</h3>
//       <button onClick={() => {

//         if(Count >= 10)
//         {
//           return;
//         }  
//         handleChange(1)

//       }}>Add 1</button>
//       <button onClick={() => {handleChange(-1)}}>sub 1</button>
//     </div>

//   );

// }
// export default App;




// import './App.css';
// import {useState} from "react";
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
//   // array destruturing -->
//   const [Count, setCount] = useState(0);

//   // we want logic at another place like below html html then logic logic then html html then logic logic it create some mixing
//   const handleChange = (value) =>
//   {
//     console.log('value:', value)
//     console.log('Count:', Count)
//     setCount(Count + value);
//   }
//   return (

//     <div className="App">
//       <h3>Counter : {Count}</h3>
//       <button onClick={() => {

//         if(Count >= 10)
//         {
//           return;
//         }  
//         handleChange(1)

//       }}>Add 1</button>
//       <button onClick={() => {
        
//         if(Count <= 0)
//         {
//           return;
//         }
//         handleChange(-1)
        
//       }}>sub 1</button>
//     </div>

//   );

// }
// export default App;




// import './App.css';
// import {useState} from "react";
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
//   // array destruturing -->
//   const [Count, setCount] = useState(0);

//   // we want logic at another place like below html html then logic logic then html html then logic logic it create some mixing
//   const handleChange = (value) =>
//   {
//     console.log('value:', value)
//     console.log('Count:', Count)
//     setCount(Count + value);
//   }
//   return (

//     <div className="App">
//       <h3>Counter : {Count}</h3>
//       <button onClick={() => {

//         if(Count >= 10)
//         {
//           return;
//         }  
//         handleChange(1)

//       }}>Add 1</button>
//       <button onClick={() => {
        
//         if(Count <= 0)
//         {
//           return;
//         }
//         handleChange(-1)
        
//       }}>sub 1</button>
//       <div>Number is {Count%2 === 0 ? "Even" : "Odd"}</div>
//     </div>

//   );

// }
// export default App;




// import './App.css';
// import {useState} from "react";
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
//   // array destruturing -->
//   const [Count, setCount] = useState(0);

//   // we want logic at another place like below html html then logic logic then html html then logic logic it create some mixing
//   const handleChange = (value) =>
//   {
//     console.log('value:', value)
//     console.log('Count:', Count)
//     setCount(Count + value);
//   }
//   if(Count > 10)
//   {
//     return (
//       <h4>Count reached maximum value</h4>
//     )
//   }
//   return (

//     <div className="App">
//       <h3>Counter : {Count}</h3>
//       <button onClick={() => {

//         if(Count > 10)
//         {
//           return;
//         }  
//         handleChange(1)

//       }}>Add 1</button>
//       <button onClick={() => {
        
//         if(Count <= 0)
//         {
//           return;
//         }
//         handleChange(-1)
        
//       }}>sub 1</button>
//       <div className = "">Number is {Count%2 === 0 ? "Even" : "Odd"}</div>
//     </div>

//   );

// }
// export default App;



// import './App.css';
// import {useState} from "react";
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
//   // array destruturing -->
//   const [Count, setCount] = useState(0);

//   // we want logic at another place like below html html then logic logic then html html then logic logic it create some mixing
//   const handleChange = (value) =>
//   {
//     console.log('value:', value)
//     console.log('Count:', Count)
//     setCount(Count + value);
//   }
//   if(Count > 10)
//   {
//     return (
//       alert("Count reached maximum value"),
//       <h4>Count reached maximum value</h4>
//     )
//   }
//   return (

//     <div className="App">
//       <h3>Counter : {Count}</h3>
//       <button onClick={() => {

//         if(Count > 10)
//         {
//           return;
//         }  
//         handleChange(1)

//       }}>Add 1</button>
//       <button onClick={() => {
        
//         if(Count <= 0)
//         {
//           return;
//         }
//         handleChange(-1)
        
//       }}>sub 1</button>
//       <div className = "">Number is {Count%2 === 0 ? "Even" : "Odd"}</div>
//     </div>

//   );

// }
// export default App;






// import './App.css';
// import {useState} from "react";
// import "./components/category.css"
// import { Category } from "./components/category";
// // import {Counter} from "./components/counter";
// console.log(Category);
// function App() {
//   // array destruturing -->
//   const [Count, setCount] = useState(0);

//   // we want logic at another place like below html html then logic logic then html html then logic logic it create some mixing
//   const handleChange = (value) =>
//   {
//     console.log('value:', value)
//     console.log('Count:', Count)
//     if(Count >= 10)
//     {
//       alert("Count reached it's maximum value")
//     }
//     setCount(Count + value);
//   }
//   return (

//     <div className="App">
//       <h3>Counter : {Count}</h3>
//       <button onClick={() => {

//         if(Count > 10)
//         {
//           return;
//         }  
//         handleChange(1)

//       }}>Add 1</button>
//       <button onClick={() => {
        
//         if(Count <= 0)
//         {
//           return;
//         }
//         handleChange(-1)
        
//       }}>sub 1</button>
//       <div className = "">Number is {Count%2 === 0 ? "Even" : "Odd"}</div>
//     </div>

//   );

// }
// export default App;






import './App.css';
import {useState} from "react";
import "./components/category.css"
import { Category } from "./components/category";
// import {Counter} from "./components/counter";
console.log(Category);
function App() {
  // array destruturing -->
  const [Count, setCount] = useState(0);

  // we want logic at another place like below html html then logic logic then html html then logic logic it create some mixing
  const handleChange = (value) =>
  {
    console.log('value:', value)
    console.log('Count:', Count)
    if(Count >= 10)
    {
      alert("Count reached it's maximum value")
      return;
    }
    setCount(Count + value);
  }
  return (

    <div className="App">
      <h3>Counter : {Count}</h3>
      <button onClick={() => {

        if(Count > 10)
        {
          return;
        }  
        handleChange(1)

      }}>Add 1</button>
      <button onClick={() => {
        
        if(Count <= 0)
        {
          return;
        }
        handleChange(-1)
        
      }}>sub 1</button>
      <div className = "">Number is {Count%2 === 0 ? "Even" : "Odd"}</div>
    </div>

  );

}
export default App;