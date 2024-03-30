
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {


  return (

    <BrowserRouter>
      <Header />
      <Routes>
        {/* <h1> SARA MARKET
          </h1>
          <h3>You can choose any clothes and electronics gadget for your daylife</h3> */}
        <Route path="/Product" element={<Product />} />
        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App;
