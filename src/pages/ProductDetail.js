import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {RadioGroup} from "@headlessui/react";
import {Rating} from "flowbite-react";
import {useContext} from "react";

import {apiGetProductDetails} from "../database/db_utils";
import ProductImagesViewer from "../components/ProductImagesViewer";
import CartContext from "../store/CartContext";

const ProductDetail = () => {
  const cartContext = useContext(CartContext);
  const [selected, setSelected] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(0);
  let {id} = useParams();

  const getProduct = async () => {
    const data = await apiGetProductDetails(id);

    console.log(data);
    if (data.response === "error") {
      console.log(error);

      return setProduct([]);
    }
    console.log(data.data[0]);
    setProduct(data.data[0]);
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addProductToCartHandler = () => {
    console.log("PRODUCT VERSION SELECTED: ", selected);

    let newProduct = [];

    if (!selected) {
      return console.error("No size selected");
    }
    if (quantity === 0) {
      return console.error("No quantity selected");
    }

    newProduct = {...product, ItemPrice: selected, Quantity: Number(quantity)};
    cartContext.addCartProduct(newProduct);
  };

  return (
    <div className="flex fle-row w-full place-content-center py-10">
      <div className="rounded-2xl w-8/12 p-6 flex flex-col">
        {product ? (
          <div className="flex columns-2 font-Poppins">
            <div className="w-6/12">
              <ProductImagesViewer product={product} />
            </div>
            <div className="w-6/12">
              <div className="flex flex-col gap-y-3">
                <div>
                  <div className="font-bold text-lg">{product.Name}</div>
                  <div className="text-sm">by {product.Brands["Name"]}</div>
                </div>
                <div>
                  <Rating>
                    <Rating.Star />
                    <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                    <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                    <a
                      className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                      href="#"
                    >
                      73 reviews
                    </a>
                    <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                    <a
                      className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                      href="#"
                    >
                      Add your Review
                    </a>
                  </Rating>
                </div>
                <div className="flex flex-row items-center w-full gap-x-4 text-sm">
                  <label>Qty: </label>
                  <input
                    className="border border-gray-300 rounded-lg py-1 px-2"
                    id="quantity"
                    placeholder="0"
                    type="number"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div className="flex place-content-center">
                  <RadioGroup value={selected} onChange={setSelected}>
                    <div className="space-x-2 flex flex-row">
                      {product &&
                        product.Prices.map((price) => (
                          <RadioGroup.Option
                            key={`${price.id}-Radio`}
                            className={({active, checked}) =>
                              `${
                                active
                                  ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                                  : ""
                              }
              ${checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"}
                relative flex cursor-pointer rounded-lg px-5 py-3 shadow-md focus:outline-none w-24  border border-gray-300`
                            }
                            value={{price: price.Price, size: price.Size}}
                          >
                            {({active, checked}) => (
                              <>
                                <div className="flex w-full items-center justify-center text-center">
                                  <div className="flex items-center">
                                    <div className="text-sm">
                                      <RadioGroup.Label
                                        as="p"
                                        className={`flex flex-col font-medium  ${
                                          checked ? "text-white" : "text-gray-900"
                                        }`}
                                      >
                                        <span>{price.Size}</span> <span>$ {price.Price}</span>
                                      </RadioGroup.Label>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                    </div>
                  </RadioGroup>
                </div>
                <div className="flex w-full place-content-center">
                  <div className="w-[75%] ">
                    <button
                      className=" bg-blue-500 text-white py-2 px-3 shadow-md w-full rounded-lg font-semibold uppercase hover:bg-blue-700 cursor-pointer"
                      disabled={false}
                      onClick={addProductToCartHandler}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
