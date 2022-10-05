import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";

import {db} from "../../firebase";

// **************************************************
// *** CATEGORY MANAGEMENT ***
// **************************************************
export const apiGetCategories = async () => {
  const q = query(collection(db, "Category"));
  const snapshot = await getDocs(q);
  const data = [];

  snapshot.forEach((doc) => {
    data.push({id: doc.id, ...doc.data()});
  });

  if (!data.empty) {
    return {response: "success", data: data};
  } else {
    return {response: "error", data: ""};
  }
};

export const apiCreateCategory = async (category, parentId) => {
  const q = await addDoc(collection(db, "Category"), {Name: category, ParentId: parentId});

  return {response: "success", data: q};
};

export const apiDeleteCategory = async (id) => {
  const q = await deleteDoc(doc(db, "Category", id));

  return {response: "success", data: q};
};

export const apiUpdateCategory = async (id, name, parentId) => {
  const q = await updateDoc(doc(db, "Category", id), {
    Name: name,
    ParentId: parentId,
  });

  return {response: "success", data: q};
};

// **************************************************
// *** PRODUCTS MANAGEMENT ***
// **************************************************

export const apiGetAllProducts = async () => {
  const q = await query(collection(db, "Product"));
  const snapshot = await getDocs(q);
  const data = [];

  snapshot.forEach((doc) => {
    data.push({id: doc.id, ...doc.data()});
  });

  if (!data.empty) {
    return {response: "success", data: data};
  } else {
    return {response: "error", data: ""};
  }
};

export const apiGetProductsByCatId = async (id) => {};

export const apiGetProductDetail = async (id) => {};

export const apiUpdateProduct = async () => {};

export const apiDeleteProduct = async () => {};

// **************************************************
// *** HIGHLIGHTS MANAGEMENT ***
// **************************************************

export const apiGetBrands = async () => {
  const q = await query(collection(db, "Brands"));
  const snapshot = await getDoc(q);
  const data = [];

  snapshot.forEach((doc) => {
    data.push({id: doc.id, ...doc.data()});
  });

  if (!data.empty) {
    return {response: "success", data: data};
  }
};

export const apiGetBrandsByRoute = async (route) => {
  const q = await query(collection(db, route));
  const snapshot = await getDocs(q);
};

// **************************************************
// *** HIGHLIGHTS MANAGEMENT ***
// **************************************************

// **************************************************
// *** PROMOTIONS MANAGEMENT ***
// **************************************************

// **************************************************
// *** ORDERS MANAGEMENT ***
// **************************************************

// **************************************************
// *** USERS MANAGEMENT ***
// **************************************************
