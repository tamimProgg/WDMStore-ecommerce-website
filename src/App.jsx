import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Cart from "./pages/Cart"
import CheckOut from "./pages/CheckOut"
import ProductDetails from "./pages/ProductDetails"
import ProductList from "./pages/ProductList"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-950 font-sans">
          <Navbar />
        <Routes>
          <Route path="/" element = {<ProductList />} />
          <Route path="/product/:id" element = {<ProductDetails />} />
          <Route path="/cart" element = {<Cart />} />
          <Route path="/checkout" element = {<CheckOut />} />
        </Routes>
        <Footer />
        </div>
      </Router>
    </>
  )
}
export default App