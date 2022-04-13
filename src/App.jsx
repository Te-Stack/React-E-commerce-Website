import { BrowserRouter , Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <p className="text-5xl font-bold">E commerce2</p>
    </div>
  );
}

export default App;
