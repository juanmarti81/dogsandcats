import {useState} from "react";
import {GrFormNext} from "react-icons/gr";
import {AiOutlineEdit, AiOutlineDelete} from "react-icons/ai";
import {HiOutlineExclamationCircle} from "react-icons/hi";
import {Modal, Button} from "flowbite-react";

import {apiDeleteCategory} from "../../database/db_utils";

function SubcategoryList({id, data}) {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [idToDelete, setIdToDelete] = useState();

  const deleteCategory = (confirmation, getAllCategories) => {
    if (confirmation === true) {
      const result = apiDeleteCategory(idToDelete);

      getAllCategories;
      setIdToDelete("");
    } else {
      setIdToDelete("");
    }
    setShowConfirmDelete(false);
  };

  const confirmDelete = (id) => {
    setIdToDelete(id);
    setShowConfirmDelete(true);
  };

  return (
    <div className="flex flex-col gap-y-2">
      {data.map((e) => {
        return e.ParentId === id ? (
          <div key={e.id} className="pl-4 flex flex-row items-center place-content-between gap-x-2">
            <div className="flex flex-row items-center">
              <GrFormNext />
              {e.Name}
            </div>
            <div className="flex flex-row items center gap-x-2">
              <button className="text-orange-900 bg-orange-300 rounded-full p-1 hover:bg-orange-100 border border-orange-800">
                <AiOutlineEdit />
              </button>
              <button
                className="text-red-900 bg-red-300 rounded-full p-1 hover:bg-red-100 border border-red-800"
                onClick={() => confirmDelete(e.id)}
              >
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        ) : null;
      })}

      <Modal popup={true} show={showConfirmDelete} size="md" onClose={() => deleteCategory(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this category?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => deleteCategory(true)}>
                Yes, I&apos;m sure
              </Button>
              <Button color="gray" onClick={() => deleteCategory(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SubcategoryList;
