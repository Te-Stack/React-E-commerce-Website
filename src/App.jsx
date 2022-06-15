import { BrowserRouter , Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/MenProductDetail";
import ProductDetail2 from "./pages/WomenProductDetail";
import ProductDetail3 from "./pages/ChildProductDetail";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "./pages/Shop";
import Shop2 from "./pages/Shop2";
import Shop3 from "./pages/Shop3";
import Shop4 from "./pages/Shop4";


  

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/ProductDetail/Men" element={<ProductDetail/>} />
        <Route path="/ProductDetail/Women" element={< ProductDetail2 />} />
        <Route path="/ProductDetail/Child" element={< ProductDetail3 />} />
        <Route path="/Cart" element={< Cart />} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/Shop/2" element={<Shop2/>} />
        <Route path="/Shop/3" element={<Shop3/>} />
        <Route path="/Shop/4" element={<Shop4/>} />
        


        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
