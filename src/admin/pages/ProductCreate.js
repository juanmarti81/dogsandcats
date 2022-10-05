import {Button} from "flowbite-react";
import {
  FaDollarSign,
  FaChevronCircleDown,
  FaChevronCircleRight,
  FaPercentage,
} from "react-icons/fa";
import {useState, useEffect} from "react";

import {apiGetAllCategories} from "../../database/db_utils";

const Subcategories = ({id, data, handleSelectedCats, selectedCats}) => {
  const [cats, setCats] = useState([]);
  const updateCats = (q) => {
    let actualList = [...cats];

    if (q.target.checked) {
      actualList = [...cats, q.target.value];
    } else {
      actualList.splice(cats.indexOf(q.target.value), 1);
    }
    console.log(actualList);
    setCats(actualList);
    handleSelectedCats(actualList);
  };

  useEffect(() => {
    setCats(selectedCats);
  }, []);

  if (data) {
    return Object.values(data).map((q) => {
      if (q.ParentId === id) {
        return (
          <div key={`${q.id}-div`} className="flex items-center pl-12">
            <input
              key={`${q.id}-input`}
              checked={cats.filter((c) => c.toLowerCase().includes(q.id)) >= 1}
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600
       dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              id={`${q.id}-input`}
              type="checkbox"
              value={q.id}
              onChange={(e) => updateCats(e)}
            />
            <label
              key={`${q.id}-label`}
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="checked-checkbox"
            >
              {q.Name}
            </label>
          </div>
        );
      }
    });
  } else {
    return null;
  }
};

const Categories = ({categories, e, handleSelectedCats, selectedCats}) => {
  const [showSubcategories, setShowSubcategories] = useState(false);

  console.log(e);
  if (e) {
    return (
      <>
        <div key={`${e.id}-div`} className="flex flex-row items-center gap-x-2">
          {showSubcategories ? (
            <FaChevronCircleDown className="" onClick={() => setShowSubcategories(false)} />
          ) : (
            <FaChevronCircleRight className="" onClick={() => setShowSubcategories(true)} />
          )}
          <input
            key={`${e.id}-input`}
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600
             dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            id="checked-checkbox"
            type="checkbox"
            value={e.id}
          />
          <label
            key={`${e.id}-label`}
            className="text-sm font-medium text-gray-900 dark:text-gray-300"
            htmlFor="checked-checkbox"
          >
            {e.Name}
          </label>
        </div>
        {showSubcategories ? (
          <Subcategories
            data={categories}
            handleSelectedCats={handleSelectedCats}
            id={e.id}
            selectedCats={selectedCats}
          />
        ) : null}
      </>
    );
  }
};

function ProductCreate() {
  const [categories, setCategories] = useState([]);
  const [selectedCats, setSelectedCats] = useState([]);
  const [images, setImages] = useState([]);
  const [imagesURLs, setImagesURLs] = useState([]);

  const handleSelectedCats = (cats) => {
    setSelectedCats(cats);
  };

  const getCategories = async () => {
    const q = await apiGetAllCategories();

    if (q.response === "success") {
      setCategories(q.data);
      console.log(q.data);
    } else {
      console.log(q.data);
    }
  };

  // START IMAGE HANDLING SECTION
  const onImageChange = (e) => {
    if (images.length < 1) {
      setImages([...e.target.files]);
    } else {
      setImages([...images, ...e.target.files]);
    }
  };

  const createImageUrls = () => {
    if (images.length < 1) return;
    const newImageUrls = [];

    images.forEach((image) => newImageUrls.push({img: image, url: URL.createObjectURL(image)}));
    setImagesURLs(newImageUrls);
  };

  const removeImageHandler = (img) => {
    let newImage = [];

    console.log(img);
    console.log(images);
    newImage = images.filter((i) => i.name != img.name);
    console.log(newImage);
    setImages(newImage);
  };
  // END IMAGE HANDLING SECTION

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    createImageUrls();
  }, [images]);

  return (
    <div className="w-full px-10">
      <form className="flex flex-col gap-y-4">
        <div>
          <h4 className="text-2xl font-bold">Create product</h4>
        </div>
        <div className="flex gap-x-6">
          <div className="flex flex-col gap-y-4 w-7/12">
            <div className="w-full">
              <div className="">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="first_name"
                >
                  Product Name <span className="text-red-700">*</span>
                </label>
                <input
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
              block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
               dark:focus:border-blue-500"
                  id="product_name"
                  placeholder=""
                  type="text"
                />
              </div>
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor="last_name"
              >
                Product Description <span className="text-red-700">*</span>
              </label>
              <textarea
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
              block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
              dark:focus:border-blue-500"
                id="description"
                placeholder=""
                rows="2"
                type="textarea"
              />
            </div>
            {/* START PRICES */}
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor="last_name"
              >
                Prices <span className="text-red-700">*</span>
              </label>
            </div>
            {/* END PRICES */}
            <div className="flex flex-row">
              {/* Categories */}
              <div className="w-6/12">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="last_name"
                >
                  Categories <span className="text-red-700">*</span>
                </label>
                <div>
                  {categories
                    ? categories.map((e) => {
                        if (e.ParentId === null) {
                          return (
                            <Categories
                              key={e.id}
                              categories={categories}
                              e={e}
                              handleSelectedCats={handleSelectedCats}
                              selectedCats={selectedCats}
                            />
                          );
                        }
                      })
                    : null}
                </div>
              </div>
              {/* categories */}
              <div className="flex flex-col gap-y-6">
                <div className="flex flex-row gap-x-4 items-center">
                  <input
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600
             dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    id="highlight"
                    type="checkbox"
                  />
                  <label
                    className="text-sm font-medium text-gray-900 dark:text-gray-300"
                    htmlFor="highlight"
                  >
                    Highlight
                  </label>
                </div>
                <div className="flex flex-row gap-x-4 items-center">
                  <input
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600
             dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    id="isActive"
                    type="checkbox"
                  />
                  <label
                    className="text-sm font-medium text-gray-900 dark:text-gray-300"
                    htmlFor="isActive"
                  >
                    Is Active?
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* START images upload section */}
          <div className=" flex-col w-5/12">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="last_name"
            >
              Images <span className="text-red-700">*</span>
            </label>

            <input
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="multiple_files"
              multiple="true"
              type="file"
              onChange={onImageChange}
            />
            <div className="flex flex-row flex-wrap gap-x-4 gap-y-4 py-4 px-1">
              {imagesURLs.map((imageSrc) => (
                <div key={`${imageSrc.url}-MainDiv`} className="inline-flex relative items-center">
                  <img
                    key={imageSrc.url}
                    className="w-20 h-20 p-2 border border-dashed border-gray-400"
                    src={imageSrc.url}
                  />
                  <button
                    key={`${imageSrc.url}-div`}
                    className="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900"
                    onClick={() => removeImageHandler(imageSrc.img)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* END images upload section */}
        </div>
        <div className="flex place-content-start gap-4 pt-4">
          <Button size="md">CREATE NEW PRODUCT</Button>
          <Button color="failure" size="md">
            CANCEL
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProductCreate;
