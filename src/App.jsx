import "./App.css";
import Adv from "./components/adv/Adv";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Wishlist from "./pages/wishlist/Wishlist";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import CheckOut from "./pages/checkOut/CheckOut";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import SignUp from "./pages/sign-up/SignUp";
import Login from "./pages/log-in/Login";
import Account from "./pages/account/Account";
import Error from "./pages/error/Error";

function App() {
  return (
    <>
      <Adv />
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/product"} element={<Product />} />
        <Route path={"/wishlist"} element={<Wishlist />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/checkout"} element={<CheckOut />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/sign-up"} element={<SignUp />} />
        <Route path={"/log-in"} element={<Login />} />
        <Route path={"/account"} element={<Account />} />
        <Route path={"*"} element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
