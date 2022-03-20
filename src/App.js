
import Menubar from './components/menubar/Menubar';
import Products from './components/products/Products';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';





function App() {
  const [count, setCount] = useState(0)

  const SetCartCount = () => {
    setCount(count + 1)
  }
  const MinusCartCount = () =>{
    setCount(count - 1);
  }

  return (
    <div className="App">
      <Menubar count = {count}></Menubar>
      <Products 
      SetCartCount = {SetCartCount}
      MinusCartCount = {MinusCartCount}
     
      ></Products>
     
      
     
    </div>
  );
}

export default App;
