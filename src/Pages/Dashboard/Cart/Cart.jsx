import useCart from "../../../Hooks/useCart";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((prev, item) => prev + item.price, 0);
  return (
    <div>
      <div className="flex items-center justify-evenly">
        <h1 className="text-3xl">Total : {cart.length}</h1>
        <h1 className="text-3xl">Total Price : {totalPrice} </h1>
        <button className="btn btn-primary">Pay</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    <MdDelete className="text-xl text-red-600"></MdDelete>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
