import {useState, useEffect} from "react";
import {Carousel} from "flowbite-react";
import {HiChevronDoubleLeft, HiChevronDoubleRight} from "react-icons/hi";
import {createClient} from "@supabase/supabase-js";
import {Link} from "react-router-dom";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_API_KEY,
);

const ProductCard = ({data}) => {
  const [images, setImages] = useState([]);

  const createImageLinks = async () => {
    data.Images.map((e) => {
      const {publicURL, error} = supabase.storage.from("images").getPublicUrl(e);

      if (error) {
        console.log(error);
      }
      setImages((current) => [...current, publicURL]);
    });
  };

  const minValue = () => {
    let priceList = [];

    data.Prices.map((e) => {
      priceList.push(e.Price);
    });
    const selectedMinPrice = Math.min(...priceList);

    return selectedMinPrice;
  };

  useEffect(() => {
    createImageLinks();
  }, []);

  return (
    <div className="flex flex-col border border-gray-400 p-4 gap-y-4 max-w-[280px] font-Poppins rounded-2xl">
      <div className="h-96 sm:h-48 xl:h-60 2xl:h-60">
        {/* Carousel */}
        <Carousel
          indicators={false}
          leftControl={<HiChevronDoubleLeft className="text-gray-500" />}
          rightControl={<HiChevronDoubleRight className="text-gray-500" />}
          slideInterval={4000}
        >
          {images &&
            Object.values(images).map((e) => {
              return (
                <img key={e} alt="Imagen" className="h-48 w-48 rounded-lg cursor-default" src={e} />
              );
            })}
        </Carousel>
        {/* Carousel */}
      </div>
      <div className="text-base font-bold">
        <Link to={`/Product/${data.id}`}>{data.Name}</Link>
      </div>
      <div className="flex flex-row place-content-between">
        <div>{data.Brands.Name}</div>
        <div>$ {minValue()}</div>
      </div>
    </div>
  );
};

export default ProductCard;
