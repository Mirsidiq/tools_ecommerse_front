import Footer from "./components/footer/footer"
import Header from "./components/header/header"
import Categories from "./pages/categories/categories"
import Contact from "./pages/contacts/contact"
import Hero from "./pages/hero/hero"
import { Route,Router,Routes } from "react-router-dom"
import Products from "./pages/products/products"
import SingleProduct from "./pages/singleProduct/SingleProduct"
import Basket from "./pages/basket/basket"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useState } from "react"
function App() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
    {/* <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl> */}

    <Header/>
    <Routes>
      <Route element={<Hero/>} path="/"/>
      <Route element={<Contact/>} path="/contact"/>
      <Route element={<Categories/>} path="/categories"/>
      <Route element={<Products/>} path="/products"/>
      <Route element={<SingleProduct/>} path="/single-product"/>
      <Route element={<Basket/>} path="/basket"/>
    </Routes>
    <Footer/>
    {/* <Contact/> */}
    </>
  )
}

export default App
