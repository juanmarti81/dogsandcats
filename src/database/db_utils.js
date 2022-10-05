import {createClient} from "@supabase/supabase-js";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_API_KEY,
);

// **************************************************
// *** CATEGORY MANAGEMENT ***
// **************************************************

export const apiGetAllCategories = async () => {
  const {data, error} = await supabase.from("Categories").select();

  if (error) {
    return {response: "error", data: error};
  } else if (data) {
    return {response: "success", data: data};
  } else {
    return {response: "loading"};
  }
};

export const apiSubcategoriesByParentId = async (id) => {
  const {data, error} = await supabase.from("Categories").select("*").eq("id", id);

  if (error) {
    return {response: "error", data: error};
  } else {
    return {response: "success", data: data};
  }
};

export const apiCreateCategory = async (name, parentId) => {
  const {data, error} = await supabase
    .from("Categories")
    .insert([{Name: name, ParentId: parentId}]);

  if (error) {
    return {response: "error", data: error};
  } else if (data) {
    return {response: "success", data: data};
  } else {
    return {response: "loading"};
  }
};

export const apiUpdateCategory = async (id, name, parentId) => {
  const {data, error} = await supabase
    .from("Categories")
    .update([{Name: name, ParentId: parentId}])
    .match({id: id});

  if (error) {
    return {response: "error", data: error};
  } else {
    return {response: "success", data: data};
  }
};

export const apiDeleteCategory = async (id) => {
  const {data, error} = await supabase.from("Categories").delete().match({id: id});

  if (error) {
    return {response: "error", data: error};
  } else {
    return {response: "success", data: data};
  }
};

// **************************************************
// *** PRODUC MANAGEMENT ***
// **************************************************

export const apiGetAllProducts = async () => {
  const {data, error} = await supabase
    .from("Products")
    .select(`*, Categories(Name), Brands(Name), Prices(*)`);

  if (error) {
    return {response: "error", data: error};
  } else if (data) {
    return {response: "success", data: data};
  } else {
    return {response: "loading"};
  }
};

export const apiGetProductDetails = async (id) => {
  const {data, error} = await supabase
    .from("Products")
    .select(`*, Categories(Name), Brands(Name), Prices(*)`)
    .eq("id", id);

  if (error) {
    return {response: "error", data: error};
  } else if (data) {
    return {response: "success", data: data};
  } else {
    return {response: "loading"};
  }
};
