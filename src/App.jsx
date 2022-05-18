import { BrowserRouter , Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/ProductDetail" element={< ProductDetail />} />
        <Route path="/Cart" element={< Cart />} />


        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
