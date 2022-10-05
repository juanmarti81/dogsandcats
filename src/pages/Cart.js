import {useState, useContext, useEffect} from "react";

import CartTable from "../components/CartTable";
import CartContext from "../store/CartContext";

const Cart = () => {
  const cartContext = useContext(CartContext);

  return (
    <div className="flex flex-col py-6 items-center font-Poppins">
      <div className="w-10/12 gap-y-4 flex flex-col">
        <div className="text-3xl font-semibold">Review your cart</div>
        <div className="flex flex-col place-content-center">
          <CartTable />
        </div>
      </div>
    </div>
  );
};

export default Cart;
