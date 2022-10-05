import {useState, useContext, useEffect} from "react";

import CartContext from "../store/CartContext";

const CartTable = () => {
  const [cartList, setCartList] = useState([]);
  const cartContext = useContext(CartContext);

  const getProducts = () => {
    const products = cartContext.cartProducts;

    console.log(products);

    setCartList(() => (products.length > 0 ? products : []));
  };
  const createImageUrls = (e) => {
    const {publicURL, error} = supabase.storage.from("images").getPublicUrl(e);

    if (error) {
      console.log(error);
    }

    return publicURL;
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="py-3 px-6" scope="col">
              <span className="sr-only">Image</span>
            </th>
            <th className="py-3 px-6" scope="col">
              Product
            </th>
            <th className="py-3 px-6" scope="col">
              Qty
            </th>
            <th className="py-3 px-6" scope="col">
              Size
            </th>
            <th className="py-3 px-6" scope="col">
              Price
            </th>
            <th className="py-3 px-6" scope="col">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {!cartList ? (
            <tr>
              <td className="text-center font-semibold p-6" colSpan="6">
                Your cart is empty
              </td>
            </tr>
          ) : (
            cartList.map((product) => {
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-32">
                  <img alt="Apple Watch" src={product.Images[0]} />
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                  {product.Name}
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-3">
                    <button
                      className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <span className="sr-only">Quantity button</span>
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div>
                      <input
                        className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="first_product"
                        placeholder="1"
                        required=""
                        type="number"
                        value={product.quantity}
                      />
                    </div>
                    <button
                      className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <span className="sr-only">Quantity button</span>
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                  {product.ItemPrice["size"]}
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                  $ {product.ItemPrice["price"]}
                </td>
                <td className="py-4 px-6">
                  <a
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    href="#"
                  >
                    Remove
                  </a>
                </td>
              </tr>;
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
