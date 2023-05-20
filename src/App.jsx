import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Categories from "./pages/categories/categories";
import Contact from "./pages/contacts/contact";
import Hero from "./pages/hero/hero";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/products/products";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Basket from "./pages/basket/basket";
import Deliver from "./pages/deliver/deliver";
import Profile from "./pages/profile/profile";
import Admin from "./private/admin/admin";
function App() {
  const host = "http://127.0.0.1:5173";
  const admin = "/admin";
  return (
    <>
      {window.location.href == host + admin ? (
        <Admin />
      ) : (
        <>
          {" "}
          <Header />
          <Routes>
            <Route element={<Hero />} path="/" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<Categories />} path="/categories" />
            <Route element={<Products />} path="/products" />
            <Route element={<SingleProduct />} path="/single-product" />
            <Route element={<Basket />} path="/basket" />
            <Route element={<Deliver />} path="/deliver" />
            <Route element={<Profile />} path="/profile" />
          </Routes>
          <Footer />
        </>
      )}
          
    </>
  );
}

export default App;
