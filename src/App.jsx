import { BrowserRouter , Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Detail1 from "./components/Reviews/page/Detail1";
import Detail2 from "./components/Reviews/page/Detail2";
import Detail3 from "./components/Reviews/page/Detail3";
import Detail4 from "./components/Reviews/page/Detail4";

  

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/ProductDetail" element={< ProductDetail />} />
        <Route path="/Cart" element={< Cart />} />
        <Route path="/ProductDetail/1" element={< Detail1 />} />
        <Route path="/ProductDetail/2" element={< Detail2 />} />
        <Route path="/ProductDetail/3" element={< Detail3 />} />
        <Route path="/ProductDetail/4" element={< Detail4 />} />


        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
