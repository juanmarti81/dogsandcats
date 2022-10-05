import {createContext, useState} from "react";

const CartContext = createContext({
  cartProducts: [],
  totalProducts: 0,
  addCartProduct: (newProduct) => {},
  removeCartProduct: (productId) => {},
  isProductInCart: (productId) => {},
});

export const CartContextProvider = ({children}) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addCartProductHandler = (newProduct) => {
    setCartProducts((current) => {
      return current.concat(newProduct);
    });
    // console.log("CONTEXT CART: ", cartProducts);
  };

  const removeCartProductHandler = (productId) => {
    setCartProducts((current) => {
      return current.filter((i) => i.id !== productId);
    });
  };

  const updateCartProductHandler = () => {};

  const isProductInCartHandler = (productId) => {
    return cartProducts.some((i) => i.id === productId);
  };

  const context = {
    cartProducts: cartProducts,
    totalProducts: cartProducts.length,
    addCartProduct: addCartProductHandler,
    removeCartProduct: removeCartProductHandler,
    isProductInCart: isProductInCartHandler,
  };

  return <CartContext.Provider value={context}>{children}</CartContext.Provider>;
};

export default CartContext;
