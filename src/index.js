import ReactDOM from "react-dom/client";

import "./index.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import App from "./App";
import Admin from "./admin/admin";
import Products from "./admin/pages/Products";
import Categories from "./admin/pages/Categories";
import reportWebVitals from "./reportWebVitals";
import "flowbite";
import Home from "./pages/Home";
import ProductCreate from "./admin/pages/ProductCreate";
import ProductDetail from "./pages/ProductDetail";
import {CartContextProvider} from "./store/CartContext";
import Cart from "./pages/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CartContextProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/">
          <Route index element={<Home />} />
          <Route element={<ProductDetail />} path="/Product/:id" />
          <Route element={<Cart />} path="/cart" />
        </Route>

        <Route element={<Admin />} path="/admin">
          <Route element={<Products />} path="/admin/products" />
          <Route element={<Categories />} path="/admin/categories" />
          <Route element={<ProductCreate />} path="/admin/newproduct" />
        </Route>
      </Routes>
    </BrowserRouter>
  </CartContextProvider>,
);
reportWebVitals();
