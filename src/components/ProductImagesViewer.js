import {useState, useEffect} from "react";
import {createClient} from "@supabase/supabase-js";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_API_KEY,
);

const ProductImagesViewer = ({product}) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

  const createImageUrls = () => {
    product.Images.map((e) => {
      const {publicURL, error} = supabase.storage.from("images").getPublicUrl(e);

      if (error) {
        console.log(error);
      }
      setImages((current) => [...current, publicURL]);
      setSelectedImage(publicURL);
    });
  };

  const setImagesSelected = (i) => {
    setSelectedImage(i);
  };

  useEffect(() => {
    if (product) {
      createImageUrls();
    }
  }, []);

  return (
    <div key={`${product}-A`} className="w-full flex flex-col gap-y-4 place-items-center">
      <div>
        <img alt="Image" className="w-64" src={selectedImage} />
      </div>
      <div className="flex flex-row gap-x-4">
        {images.map((i) => {
          return (
            <img
              key={i}
              alt="Image"
              className="w-16 cursor-pointer"
              src={i}
              onClick={() => setImagesSelected(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImagesViewer;
