import React, {useEffect, useState} from "react";
import {Button, Label, Modal, Select, TextInput} from "flowbite-react";
import {Spinner} from "flowbite-react";

import CategoryList from "../components/CategoryList";
import {apiGetAllCategories, apiCreateCategory} from "../../database/db_utils";

function Categories() {
  const [categoryName, setCategoryName] = useState([]);
  const [formNewCategory, setFormNewCategory] = useState(false);
  const [addCategory, setAddCategory] = useState("");
  const [addParentId, setAddParentId] = useState("");
  const [loading, setLoading] = useState(false);

  const newCategory = async () => {
    if (!addCategory) {
      return console.log("No hay categoría");
    }
    const result = apiCreateCategory(addCategory, addParentId);

    result
      .then((e) => console.log(e))
      .then(() => setFormNewCategory(false))
      .then(() => {
        setAddCategory("");
        setAddParentId("");
        getAllCategories();
      });
  };

  const getAllCategories = async () => {
    const data = await apiGetAllCategories();

    if (data.response === "success") {
      setLoading(false);
      setCategoryName(data.data);
    } else if (data.response === "error") {
      setLoading(false);
      console.error(data.data);
    } else {
      setLoading(true);
    }
  };

  useEffect(() => {
    // getCategories();
    getAllCategories();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-y-4 pt-4">
        <div className="text-4xl font-extrabold">Categories</div>
        <Button onClick={() => setFormNewCategory(true)}>Add New Category</Button>

        <div>
          {loading ? (
            <Spinner aria-label="Loading..." color="success" />
          ) : (
            <CategoryList data={categoryName} getAllCategories={getAllCategories} />
          )}
        </div>
      </div>
      {/* Start Modal */}
      <React.Fragment>
        <Modal show={formNewCategory} onClose={() => setFormNewCategory(false)}>
          <Modal.Header>Add New Category</Modal.Header>
          <Modal.Body>
            <form className="flex flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="category" value="Category Name" />
                </div>
                <TextInput
                  id="category"
                  placeholder="Category Name"
                  required={true}
                  sizing="sm"
                  type="text"
                  value={addCategory}
                  onChange={(e) => setAddCategory(e.target.value)}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="parentid" value="Parent Category" />
                </div>
                <Select
                  id="parentid"
                  required={true}
                  sizing="sm"
                  value={addParentId}
                  onChange={(e) => setAddParentId(e.target.value)}
                >
                  <option value="">None</option>
                  {categoryName
                    ? categoryName.map((cat) => {
                        return cat.ParentId === null ? (
                          <option key={cat.id} value={cat.id}>
                            {cat.Name}
                          </option>
                        ) : null;
                      })
                    : null}
                </Select>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <div className="flex flex-row justify-items-center items-center gap-x-3 ">
              <Button gradientMonochrome="success" size="sm" onClick={() => newCategory()}>
                Add
              </Button>
              <Button
                gradientMonochrome="failure"
                size="sm"
                onClick={() => setFormNewCategory(false)}
              >
                Cancel
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    </>
  );
}

export default Categories;
