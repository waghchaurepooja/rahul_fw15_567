
import './App.css';

import { Button } from './components/Button';

function App() {
  return (
    <div className="App" style={{
      border: "1px solid",
      width: "25vw",
      margin: "auto",
      marginTop : "1vw",
      padding: "1vw",
    }}>
      <Button theme= {"Primary"}>Primary Button</Button>
      <Button theme= {"Default"}>Default Button</Button>
      <Button theme= {"Dashed"}>Dashed Button</Button>
      <Button theme= {"Text"}>Text Button</Button>
      <Button theme= {"Link"}>Link Button</Button>
    </div>
  );
}

export default App;
