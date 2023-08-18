import supabase, { supabaseUrl } from "./supabase";

export const getCabins = async () => {
  let { data: cabins, error } = await supabase
    .from("cabins")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return cabins;
};

// If creating new cabin don't pass second param.
// If editing pass id of the cabin as second param.
export const createEditCabin = async (newCabin, id) => {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  // If there is "/"" in the image name, supabase creates subfolder inside storage bucket. Therefore, remove "/".
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create cabin
  let query = supabase.from("cabins");

  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  } else {
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }
  const { data, error } = await query.select();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. If there was problem uploading the image, delete corresponding record from cabins table.
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Cabins could not be created");
  }

  return data;
};

export const deleteCabin = async (id) => {
  const { error, data } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
};

// https://dutduonmyxkrrtlmciul.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
