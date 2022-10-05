import {GrCart} from "react-icons/gr";
import {useContext} from "react";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import CartContext from "../store/CartContext";

const CartWidget = () => {
  const [items, setItems] = useState(0);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    setItems(cartContext.totalProducts);
  }, [cartContext]);

  return (
    <div className="flex flex-col items-center gap-y-1">
      <button className=" relative items-center">
        <Link to="/cart">
          <div className="flex flex-col items-center">
            <div className="text-lg">
              <GrCart />
            </div>
            <div className="text-sm font-light font-Poppins uppercase">Cart</div>
          </div>
          {items > 0 ? (
            <div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
              {items}
            </div>
          ) : null}
        </Link>
      </button>
    </div>
  );
};

export default CartWidget;
