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

// babel is there means it present in iternally
// import './App.css';

// function App()
// {
//   return ( 
//   <div className="App">
//     <button>Test 2</button>
//     <input />
//     <img src="" alt="missing" />
//   </div>

//   );
// }

// import './App.css';

// function App()
// {
//   return ( 

//   <div className="App">Hello</div>
//   );
// }

// import './App.css';

// function App()
// {
//   const food = "Pizza"
//   return ( 
//   // <div className="App">{whatever variable name}</div>

//   <div className="App">{food}</div>

//   );
// }




// import './App.css';

// function App()
// {
//   const food = "Pizza";
//   const age = 12;
//   return ( 
//   // <div className="App">{whatever variable name}</div>

//   <div className="App">Your fav food is {food}, You are {age} years old</div>

//   );
// }

// import './App.css';

// function App()
// {
//   const food = "Pizza";
//   const age = 12;
//   return ( 
//   // <div className="App">{whatever variable name}</div>
//     // it called iterpolation means we evaluate somethings value inside variable -->
//   <div className="App">
//     Your fav food is {food}, You are {age} years old
//     <div>{1}</div>
//     <div>{1+2}</div>
//     <div>{1+2 +(3/2)}</div>
//     <div>{1+2 +(3/2) + 8}</div>
//   </div>

//   );
// }

// import './App.css';

// function App()
// {
//   const food = "Pizza";
//   const age = 12;
//   return ( 
//   // <div className="App">{whatever variable name}</div>
//     // it called iterpolation means we evaluate somethings value inside variable means we write some logic -->
//   <div className="App">
//     Your fav food is {food}, You are {age} years old
//     {/* <div>{if(){}}</div>
//       we can't use if inside element for condition becasue if(){} conditon does't not return anything because we don't invoke any function so for that we use ternaory operator
//     */}
//   </div>

//   );
// }

// import './App.css';

// function App()
// {
//   const food = "Pizza";
//   const age = 12;
//   return ( 
//   // <div className="App">{whatever variable name}</div>
//     // it called iterpolation means we evaluate somethings value inside variable means we write some logic -->
//   <div className="App">
//     Your fav food is {food}, You are {age} years old
//     {/* <div>You are {if(age>18){"Eligible"}:else{"Not Eligible"}}</div> */}
//     <div>You are {age > 18 ? "Eligible" : "Not Eligible"} for license</div>
//   </div>

//   );
// }

// import './App.css';

// function App()
// {
//   const food = "Pizza";
//   const age = 20;
//   return ( 
//   // <div className="App">{whatever variable name}</div>
//     // it called iterpolation means we evaluate somethings value inside variable means we write some logic -->
//   <div className="App">
//     Your fav food is {food}, You are {age} years old
//     {/* <div>You are {if(age>18){"Eligible"}:else{"Not Eligible"}}</div> */}
//     <div>You are {age > 18 ? "Eligible" : "Not Eligible"} for license</div>
//   </div>
//   );
// }

// import './App.css';

// function App()
// {
//   const food = "Pizza";
//   const age = 21;
//   return ( 
//   // <div className="App">{whatever variable name}</div>
//     // it called iterpolation means we evaluate somethings value inside variable means we write some logic -->
//   <div className="App">
//     Your fav food is {food}, You are {age} years old
//     {/* <div>You are {if(age===18){"Eligible"}:else if(age===21){"Good"} :else{"Not Eligible"}}</div> */}
//     <div>You are {age === 18 ? "Eligible" : age === 21 ? "Good" : "Not Eligible"} for license</div>
//   </div>
//   );
// }

// import './App.css';

// function App()
// {
//   const food = "Pizza";
//   const age = 21;
//   const skills = ["MERN","NodeJS","DESIGN","DSA","Animation"];
//   return ( 
//   // <div className="App">{whatever variable name}</div>
//     // it called iterpolation means we evaluate somethings value inside variable means we write some logic -->
//   <div className="App">
//     Your fav food is {food}, You are {age} years old
//     {/* <div>You are {if(age===18){"Eligible"}:else if(age===21){"Good"} :else{"Not Eligible"}}</div> */}
//     <div>You are {age === 18 ? "Eligible" : age === 21 ? "Good" : "Not Eligible"} for license</div>
//     <div>
//       Your Skills : 
//       {/* {for(){}} 
//         it is not return anything it is a statement
//         so for that we use map(function()) or forEach(function()) because it return
//       */}
//     </div>
//   </div>
//   );
// }

// import './App.css';

// function App()
// {
//   const food = "Pizza";
//   const age = 21;
//   const skills = ["MERN","NodeJS","DESIGN","DSA","Animation"];
//   return ( 
//   // <div className="App">{whatever variable name}</div>
//     // it called iterpolation means we evaluate somethings value inside variable means we write some logic -->
//   <div className="App">
//     Your fav food is {food}, You are {age} years old
//     {/* <div>You are {if(age===18){"Eligible"}:else if(age===21){"Good"} :else{"Not Eligible"}}</div> */}
//     <div>You are {age === 18 ? "Eligible" : age === 21 ? "Good" : "Not Eligible"} for license</div>
//     <div>
//       Your Skills : 
//       {skills};
//     </div>
//   </div>
//   );
// }

// import './App.css';

// function App()
// {
//   const food = "Pizza";
//   const age = 21;
//   const skills = ["MERN","NodeJS","DESIGN","DSA","Animation"];
//   return ( 
//   // <div className="App">{whatever variable name}</div>
//     // it called iterpolation means we evaluate somethings value inside variable means we write some logic -->
//   <div className="App">
//     Your fav food is {food}, You are {age} years old
//     {/* <div>You are {if(age===18){"Eligible"}:else if(age===21){"Good"} :else{"Not Eligible"}}</div> */}
//     <div>You are {age === 18 ? "Eligible" : age === 21 ? "Good" : "Not Eligible"} for license</div>
//     <div>
//       Your Skills : 
//       <ul>
//         {skills.map(function(e)
//         {
//           return <li>e</li>
//         })}
//       </ul>
//     </div>
//   </div>




//   );
// }





// import './App.css';

// function App()
// {
//   const food = "Pizza";
//   const age = 21;
//   const skills = ["MERN","NodeJS","DESIGN","DSA","Animation"];
//   return ( 
//   // <div className="App">{whatever variable name}</div>
//     // it called iterpolation means we evaluate somethings value inside variable means we write some logic -->
//   <div className="App">
//     Your fav food is {food}, You are {age} years old
//     {/* <div>You are {if(age===18){"Eligible"}:else if(age===21){"Good"} :else{"Not Eligible"}}</div> */}
//     <div>You are {age === 18 ? "Eligible" : age === 21 ? "Good" : "Not Eligible"} for license</div>
//     <div>
//       Your Skills : 
//       <ul>
//         {skills.map((e) =>
//         {
//           return <li>{e}</li>
//           // if return like these things --> {[<li>0 index value</li>,<li>1 index value</li>,<li>2 index value</li>,<li>3 index value</li>,<li>4 index value</li>,<li> index value</li>]}
//         })}
//       </ul>
//     </div>
//   </div>
//   );
// }

// import './App.css';
// // go App.css and change css

// function App()
// {
//   const food = "Pizza";
//   const age = 21;
//   const skills = ["MERN","NodeJS","DESIGN","DSA","Animation"];
//   return ( 
//   // <div className="App">{whatever variable name}</div>
//     // it called iterpolation means we evaluate somethings value inside variable means we write some logic -->
//   <div className="App">
//     Your fav food is {food}, You are {age} years old
//     {/* <div>You are {if(age===18){"Eligible"}:else if(age===21){"Good"} :else{"Not Eligible"}}</div> */}
//     <div>You are {age === 18 ? "Eligible" : age === 21 ? "Good" : "Not Eligible"} for license</div>
//     <div>
//       Your Skills : 
//       <ul>
//         {skills.map((e) =>
//         {
//           return <p className = "redtext">Skills : {e}</p>
//           // now I want that we give logic by that logic we print all skills from one function to anywhere so for that we write a function and functio name have Capital first letter
//         })}
//       </ul>
//     </div>
//   </div>
//   );
// }

// import './App.css';
// // go App.css and change css

// function App()
// {
//   const food = "Pizza";
//   const age = 21;
//   const skills = ["MERN","NodeJS","DESIGN","DSA","Animation"];
//   return ( 
//   // <div className="App">{whatever variable name}</div>
//     // it called iterpolation means we evaluate somethings value inside variable means we write some logic -->
//   <div className="App">
//     Your fav food is {food}, You are {age} years old
//     {/* <div>You are {if(age===18){"Eligible"}:else if(age===21){"Good"} :else{"Not Eligible"}}</div> */}
//     <div>You are {age === 18 ? "Eligible" : age === 21 ? "Good" : "Not Eligible"} for license</div>
//     <div>
//       Your Skills : 
//       <ul>
//         {skills.map((e) =>
//         {
//           return <p className = "redtext">Skills : {e}</p>
//         })}
//       </ul>
//     </div>
//     <Skill />
//   </div>
//   );
// }


// // Component --> resuable
// function Skill()
// {
//   return <p className = "redtext">Skills : React</p>
// }

// import './App.css';
// // go App.css and change css

// function App()
// {
//   const food = "Pizza";
//   const age = 21;
//   const skills = ["MERN","NodeJS","DESIGN","DSA","Animation"];
//   return ( 
//   // <div className="App">{whatever variable name}</div>
//     // it called iterpolation means we evaluate somethings value inside variable means we write some logic -->
//   <div className="App">
//     Your fav food is {food}, You are {age} years old
//     {/* <div>You are {if(age===18){"Eligible"}:else if(age===21){"Good"} :else{"Not Eligible"}}</div> */}
//     <div>You are {age === 18 ? "Eligible" : age === 21 ? "Good" : "Not Eligible"} for license</div>
//     <div>
//       Your Skills : 
//       <ul>
//         {skills.map((e) =>
//         {
//           return <p className = "redtext">Skills : {e}</p>
//         })}
//       </ul>
//     </div>
//     {/* resubale things */}
//     <Skill />
//     <Skill />
//     <Skill />
//     <Skill />
//     <Skill />
//   </div>
//   );
// }


// // Component --> resuable
// function Skill()
// {
//   return <p className = "redtext">Skills : React</p>
// }

// import './App.css';
// // go App.css and change css

// function App()
// {
//   const food = "Pizza";
//   const age = 21;
//   const skills = ["MERN","NodeJS","DESIGN","DSA","Animation"];
//   return ( 
//   // <div className="App">{whatever variable name}</div>
//     // it called iterpolation means we evaluate somethings value inside variable means we write some logic -->
//   <div className="App">
//     Your fav food is {food}, You are {age} years old
//     {/* <div>You are {if(age===18){"Eligible"}:else if(age===21){"Good"} :else{"Not Eligible"}}</div> */}
//     <div>You are {age === 18 ? "Eligible" : age === 21 ? "Good" : "Not Eligible"} for license</div>
//     <div>
//       Your Skills : 
//       <ul>
//         {skills.map((e) =>
//         {
//           return <p className = "redtext">Skills : {e}</p>
//         })}
//       </ul>
//     </div>
//     {/* resubale things */}
//     <Skill></Skill>
//     <Skill />
//     <Skill />
//     <Skill />
//     <Skill />
//   </div>
//   );
// }


// // Component --> resuable
// function Skill()
// {
//   return <p className = "redtext">Skills : React</p>
// }

// import './App.css';
// // go App.css and change css

// function App()
// {
//   const food = "Pizza";
//   const age = 21;
//   const skills = ["MERN","NodeJS","DESIGN","DSA","Animation"];
//   return ( 
//   // <div className="App">{whatever variable name}</div>
//     // it called iterpolation means we evaluate somethings value inside variable means we write some logic -->
//   <div className="App">
//     Your fav food is {food}, You are {age} years old
//     {/* <div>You are {if(age===18){"Eligible"}:else if(age===21){"Good"} :else{"Not Eligible"}}</div> */}
//     <div>You are {age === 18 ? "Eligible" : age === 21 ? "Good" : "Not Eligible"} for license</div>
//     <div>
//       Your Skills : 
//       <ul>
//         {skills.map((e) =>
//         {
//           return <Skill />
//         })}
//       </ul>
//     </div>
//   </div>
//   );
// }


// // Component --> resuable
// function Skill()
// {
//   return <p className = "redtext">Skills : React</p>
// }



// import './App.css';
// // go App.css and change css

// function App()
// {
//   const food = "Pizza";
//   const age = 21;
//   const skills = ["MERN","NodeJS","DESIGN","DSA","Animation"];
//   return ( 
//   // <div className="App">{whatever variable name}</div>
//     // it called iterpolation means we evaluate somethings value inside variable means we write some logic -->
//   <div className="App">
//     Your fav food is {food}, You are {age} years old
//     {/* <div>You are {if(age===18){"Eligible"}:else if(age===21){"Good"} :else{"Not Eligible"}}</div> */}
//     <div>You are {age === 18 ? "Eligible" : age === 21 ? "Good" : "Not Eligible"} for license</div>
//     <div>
//       Your Skills : 
//       <ul>
//         {skills.map((e) =>
//         {
//           return <Skill />
//         })}
//       </ul>
//     </div>
//   </div>
//   );
// }


// // Component --> resuable
// // {skill} --> object because it is destrutured it
// function Skill({skill})
// {
//   return <p className = "redtext">Skills : {skill}</p>
// }

// import './App.css';
// // go App.css and change css

// function App()
// {
//   const food = "Pizza";
//   const age = 21;
//   const skills = ["MERN","NodeJS","DESIGN","DSA","Animation"];
//   return ( 
//   // <div className="App">{whatever variable name}</div>
//     // it called iterpolation means we evaluate somethings value inside variable means we write some logic -->
//   <div className="App">
//     Your fav food is {food}, You are {age} years old
//     {/* <div>You are {if(age===18){"Eligible"}:else if(age===21){"Good"} :else{"Not Eligible"}}</div> */}
//     <div>You are {age === 18 ? "Eligible" : age === 21 ? "Good" : "Not Eligible"} for license</div>
//     <div>
//       Your Skills : 
//       <ul>
//         {skills.map((e) =>
//         {
//           // passing skills
//           return <Skill skillll = {e}  />
//         })}
//       </ul>
//     </div>
//   </div>
//   );
// }


// // Component --> resuable
// // {skill} --> object because it is destrutured it
// function Skill({skillll})
// {
//   return <p className = "redtext">Skills : {skillll}</p>
// }

// import './App.css';
// // go App.css and change css

// function App()
// {
//   const food = "Pizza";
//   const age = 21;
//   const skills = ["MERN","NodeJS","DESIGN","DSA","Animation"];
//   return ( 
//   // <div className="App">{whatever variable name}</div>
//     // it called iterpolation means we evaluate somethings value inside variable means we write some logic -->
//   <div className="App">
//     Your fav food is {food}, You are {age} years old
//     {/* <div>You are {if(age===18){"Eligible"}:else if(age===21){"Good"} :else{"Not Eligible"}}</div> */}
//     <div>You are {age === 18 ? "Eligible" : age === 21 ? "Good" : "Not Eligible"} for license</div>
//     <div>
//       Your Skills : 
//       <ul>
//         {skills.map((e) =>
//         {
//           // passing skills
//           // return <Skill key = "value" key = "value"  />
//           return <Skill age = "1" name = "test"  />
//         })}
//       </ul>
//     </div>
//   </div>
//   );
// }


// // Component --> resuable
// // {skill} --> object because it is destrutured it
// // whatever we pass it come as a object in key and values pairs
// function Skill(props)
// {
//   console.log('props:', props)
//   return <p className = "redtext">Skills : {1}</p>
// }

// import './App.css';
// // go App.css and change css

// function App()
// {
//   const food = "Pizza";
//   const age = 21;
//   const skills = ["MERN","NodeJS","DESIGN","DSA","Animation"];
//   return ( 
//   // <div className="App">{whatever variable name}</div>
//     // it called iterpolation means we evaluate somethings value inside variable means we write some logic -->
//   <div className="App">
//     Your fav food is {food}, You are {age} years old
//     {/* <div>You are {if(age===18){"Eligible"}:else if(age===21){"Good"} :else{"Not Eligible"}}</div> */}
//     <div>You are {age === 18 ? "Eligible" : age === 21 ? "Good" : "Not Eligible"} for license</div>
//     <div>
//       Your Skills : 
//       <ul>
//         {skills.map((e) =>
//         {
//           // passing skills
//           // return <Skill key = "value" key = "value"  />
//           return <Skill skillll = {e}  />
//         })}
//       </ul>
//     </div>
//   </div>
//   );
// }


// // Component --> resuable
// // {skill} --> object because it is destrutured it
// // whatever we pass it come as a object in key and values pairs
// function Skill(props)
// {
//   console.log('props:', props)
//   return <p className = "redtext">Skills : {props.skillll}</p>
// }

// import './App.css';
// // go App.css and change css

// function App()
// {
//   const food = "Pizza";
//   const age = 21;
//   const skills = ["MERN","NodeJS","DESIGN","DSA","Animation"];
//   return ( 
//   // <div className="App">{whatever variable name}</div>
//     // it called iterpolation means we evaluate somethings value inside variable means we write some logic -->
//   <div className="App">
//     Your fav food is {food}, You are {age} years old
//     {/* <div>You are {if(age===18){"Eligible"}:else if(age===21){"Good"} :else{"Not Eligible"}}</div> */}
//     <div>You are {age === 18 ? "Eligible" : age === 21 ? "Good" : "Not Eligible"} for license</div>
//     <div>
//       Your Skills : 
//       <ul>
//         {skills.map((e) =>
//         {
//           // passing skills
//           // return <Skill key = "value" key = "value"  />
//           return <Skill skillll = {e}  />
//         })}
//       </ul>
//     </div>

//     {/* resuable */}
//     <Skill skillll = "HTML CSS JavaScript MERN"/>
//   </div>
//   );
// }


// // Component --> resuable
// // {skill} --> object because it is destrutured it
// // whatever we pass it come as a object in key and values pairs
// // function name first letter should be Capital letter
// function Skill(props)
// {
//   console.log('props:', props)
//   return <p className = "redtext">Skills : {props.skillll}</p>
// }

// import './App.css';
// // go App.css and change css

// function App()
// {
//   const food = "Pizza";
//   const age = 25;
//   const skills = ["MERN","NodeJS","DESIGN","DSA","Animation"];
//   return ( 
//   // <div className="App">{whatever variable name}</div>
//     // it called iterpolation means we evaluate somethings value inside variable means we write some logic -->
//   <div className="App">
//     Your fav food is {food}, You are {age} years old
//     {/* <div>You are {if(age===18){"Eligible"}:else if(age===21){"Good"} :else{"Not Eligible"}}</div> */}
//     <div>You are {age === 18 ? "Eligible" : age === 21 ? "Good" : "Not Eligible"} for license</div>
//     <div>
//       Your Skills : 
//       <ul>
//         {skills.map((e) =>
//         {
//           // passing skills
//           // return <Skill key = "value" key = "value"  />
//           return <Skill skillll = {e} key = "values" age = {age}  />
//         })}
//       </ul>
//     </div>

//     {/* resuable */}
//     <Skill skillll = "HTML CSS JavaScript MERN"/>
//   </div>
//   );
// }


// // Component --> resuable
// // {skill} --> object because it is destrutured it
// // whatever we pass it come as a object in key and values pairs
// // function name first letter should be Capital letter
// function Skill(props)
// {
//   console.log('props:', props)
//   return <p className = "redtext">Skills : {props.skillll}</p>
// }

import './App.css';
// go App.css and change css

function App()
{
  const food = "Pizza";
  const age = 25;
  const skills = ["MERN","NodeJS","DESIGN","DSA","Animation"];
  return ( 
  // <div className="App">{whatever variable name}</div>
    // it called iterpolation means we evaluate somethings value inside variable means we write some logic -->
  <div className="App">
    Your fav food is {food}, You are {age} years old
    {/* <div>You are {if(age===18){"Eligible"}:else if(age===21){"Good"} :else{"Not Eligible"}}</div> */}
    <div>You are {age === 18 ? "Eligible" : age === 21 ? "Good" : "Not Eligible"} for license</div>
    <div>
      Your Skills : 
      <ul>
        {skills.map((e) =>
        {
          // passing skills
          // return <Skill key = "value" key = "value"  />
          return <Skill skillll = {e} key = "values" age = {age}  />
        })}
      </ul>
    </div>

    {/* resuable */}
    <Skill skillll = "HTML CSS JavaScript MERN"/>
  </div>
  );
}


// Component --> resuable
// {skill} --> object because it is destrutured it
// whatever we pass it come as a object in key and values pairs
// function name first letter should be Capital letter
function Skill(props)
{
  // console.log('props:', props)
  return <Sk s = {props.skillll} />
}

// we will also write Component inside Component
// like -->
funciton Sk(props)
{
  // console.log('props5:', props)
  return <p>{props.s}</p>
}


export default App;
