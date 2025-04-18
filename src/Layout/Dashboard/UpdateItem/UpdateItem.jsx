import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import usePublicAxios from "../../../Hooks/usePublicAxios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect } from "react";
import Swal from "sweetalert2";

const image_hoisting_key = import.meta.env.VITE_IMAGE_HOISTING_KEY;
const image_hoisting_api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`;

const UpdateItem = () => {
  const { item } = useLoaderData();
  const { name, recipe, price, category, _id } = useLoaderData();
  console.log(item);

  const { register, handleSubmit, reset } = useForm();
  const publicAxios = usePublicAxios();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await publicAxios.post(image_hoisting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        recipe: data.recipe,
        image: res.data.data.display_url,
        price: parseFloat(data.price),
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        Swal.fire({
          title: "Thank you!",
          text: `${data.name} is updated`,
          icon: "success",
        });
        reset();
      }
    }
  };
  return (
    <div>
      <SectionTitle
        heading="Looks Good"
        subHeading="UPDATE ITEM"
      ></SectionTitle>
      <div className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Recipe Name */}
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Recipe Name
            </label>
            <input
              type="text"
              {...register("name")}
              defaultValue={name}
              id="name"
              placeholder="Recipe Name *"
              className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            />
          </div>

          {/* Category & Price */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Category */}
            <div className="flex-1">
              <label htmlFor="category" className="block font-medium mb-1">
                Category
              </label>
              <select
                {...register("category")}
                defaultValue={category}
                id="category"
                className="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              >
                <option value="default" disabled>
                  Please Select Category
                </option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
                <option value="soup">Soup</option>
                <option value="pizza">Pizza</option>
              </select>
            </div>

            {/* Price */}
            <div className="flex-1">
              <label htmlFor="price" className="block font-medium mb-1">
                Price
              </label>
              <input
                type="text"
                {...register("price")}
                id="price"
                placeholder={price}
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Recipe Details */}
          <div>
            <label htmlFor="recipe" className="block font-medium mb-1">
              Recipe Details
            </label>
            <textarea
              {...register("recipe")}
              id="recipe"
              rows="6"
              defaultValue={recipe}
              placeholder="Enter recipe ..."
              className="w-1/2 resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-700 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            ></textarea>
          </div>
          <div>
            <label htmlFor="image" className="block font-medium mb-1">
              Upload Recipe Image
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("image")}
              id="image"
              className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-sky-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-sky-700 hover:file:bg-sky-200"
            />
          </div>

          {/* Submit Button */}
          <input
            className="mt-4 w-1/3 rounded-md bg-sky-500 px-4 py-3 font-semibold text-white hover:bg-sky-600 transition-colors"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
