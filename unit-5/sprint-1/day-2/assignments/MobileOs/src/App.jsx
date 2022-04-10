
import './App.css';

function App() {
  const ProductManufacturing = 
  [
    {
      Heading : "Mobile Operating Systes",
      Product : ["Android","Blckberry","iPhone","Windows Phone"]
    },
    {
      Heading : "Mobile Manufacturers",
      
      Product : ["Samsung","HTC","Micromax","Apple"]
    }
  ]
  return (
    <div className="App">
      {ProductManufacturing.map((element) =>{
        return <Heading heading = {element.Heading} product = {element.Product} />
      })}
    </div>
  );
}

function Heading({heading,product})
{
  console.log('heading:', heading)
  console.log('product:', product)
  return (
    <div style= {{border : "1px solid blue"}}>
      <h1>{heading}</h1>

      <ul style = {{textAlign : "left"}}>
        {product.map((element) =>{
          console.log('element:', element)
          return <Product Item = {element} />     
        })}  
      </ul>
    </div>
  )
}
function Product({Item})
{
  console.log('Item:', Item)
  // console.log('products:', products)
  return (
    <li className = {`${Item === "Apple" ? "Circle" : Item === "Samsung" ? "Square" : Item === "HTC" ? "Square" : "Disc" }`}>{Item}</li>
  )
}

export default App;