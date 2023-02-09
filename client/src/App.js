
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
  
  <Route path="/" element={<Home/>} />
  
  </Routes>
  <Footer/>
  
  </BrowserRouter>
  );
}

export default App;
