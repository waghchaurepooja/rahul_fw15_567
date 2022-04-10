
import './App.css';

function App() {
  const navbar = 
  [
    {
      Logo : "LOGOBAKERY",
      Links : ["Services","Projects","About"],
      Button : "Contact"
    }
  ]
  return (
    <div className="App">
      {/* <div className = "navbar">
        <div className = "logobox">ABCD</div>
        <div className = "linkbox">
          <a className = "link" href="">ABCD</a>
          <a className = "link" href="">ABCD</a>
          <a className = "link" href="">ABCD</a>
        </div>
        <div className = "buttonbox">

          <button className = "button">ABCD</button>
        </div>
      </div> */}
      {navbar.map((element) =>{
        return <Navbar logo = {element.Logo} links = {element.Links} button = {element.Button}/>
      })}
    </div>
  );
}

function Navbar({logo,links,button})
{
  console.log('button:', button)
  console.log('links:', links)
  console.log('logo:', logo)
  return (
    <div className="navbar">
      <div className="logobox">{logo}</div>
      <div className="linkbox">
        
        {links.map((element) =>{
          console.log('element:', element)
          return <Links link = {element} />
        })}
      </div>
      <div className="buttonbox">
        <button className = "button">{button}</button>
      </div>
    </div>

  )
}


function Links({link})
{
  console.log('link:', link)
  return (
    <a className = "link" href="localhost:3000">{link}</a>
  )
}

export default App;