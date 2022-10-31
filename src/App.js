import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import DetailsPage from "./components/detailsPage/DetailsPage";



function App() {
  return (
   <>
   <Navbar />
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/details' element={<DetailsPage />} />
   </Routes>
   </BrowserRouter>
   <Footer />
   </>
  );
}

export default App;
