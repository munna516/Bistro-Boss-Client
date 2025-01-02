import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const axiosSecure = useAxiosSecure();
  const { name, image, _id, price } = item;
  const location = useLocation();
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const handleAddToCart = (food) => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      console.log(cartItem);
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} is added cart`,
            showConfirmButton: false,
            timer: 1500,
          });

          // refetch the data
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You're not logged in",
        text: "Please Login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location.pathname });
        }
      });
    }
  };
  return (
    <div className="card card-compact bg-base-100  shadow-xl">
      <figure>
        <img className="w-full" src={item.image} alt={item.name} />
      </figure>
      <p className="bg-slate-600 text-white absolute right-4 mt-4  px-4 py-1 rounded-md">
        ${item.price}
      </p>
      <div className="card-body justify-center flex items-center mt-5">
        <h2 className="card-title font-bold text-2xl">{item.name}</h2>
        <p className="text-gray-400">{item.recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-orange-300 border-b-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
