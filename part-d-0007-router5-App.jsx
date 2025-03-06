import './App.css'
import Header from './components/Header';

import About from "./pages/About"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Default from "./pages/Default"

import { Routes, Route } from 'react-router-dom'

function App() {

  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about'  element={<About />} />
        <Route path='*' element={<Default />} />
      </Routes>

    </>
  );
}

export default App;
