import {Spinner} from "flowbite-react";

import SubcategoryList from "./SubcategoryList";

const CategoryList = ({data, getAllCategories}) => {
  return (
    <div className="flex flex-col gap-y-2">
      {data ? (
        data.map((e) => {
          return e.ParentId === null ? (
            <div key={e.id}>
              <span className="font-bold">{e.Name}</span>
              <SubcategoryList data={data} getAllCategories={getAllCategories} id={e.id} />
            </div>
          ) : null;
        })
      ) : (
        <Spinner aria-label="Loading..." color="success" />
      )}
    </div>
  );
};

export default CategoryList;
