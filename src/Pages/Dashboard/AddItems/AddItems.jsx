import React from "react";
import SectionTitle from "../../../Components/ScetionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGEBB_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes);
      if (menuRes.data.insertedId) {
        reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <SectionTitle
        heading="Add an item"
        subheading={"What's New?"}
      ></SectionTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Recipe */}
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Recipe name*</span>
              </div>
            </label>
            <input
              type="text"
              required
              {...register("name", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          {/* Category & Price */}
          <div className="flex gap-6">
            {/* Category */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                required
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="soup">Soup</option>
                <option value="pizza">Pizza</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>
            {/* Price */}

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                type="text"
                required
                {...register("price", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Recipe Details*</span>
              </div>
              <textarea
                {...register("recipe", { required: true })}
                required
                className="textarea textarea-bordered h-24"
                placeholder="Bio"
              ></textarea>
            </label>
          </div>
          <div>
            <input
              {...register("image", { required: true })}
              type="file"
              required
              className="file-input w-full  mt-5"
            />
          </div>
          <button className="btn mt-5">
            Add Items <FaUtensils></FaUtensils>{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
