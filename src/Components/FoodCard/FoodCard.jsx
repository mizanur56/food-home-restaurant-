import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();

  const handleAddCart = () => {
    if (user && user.email) {
      console.log("hello");

      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/cart", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Thank you!",
            text: `${name} is add to the cart`,
            icon: "success",
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="bg-white relative w-96 shadow-sm rounded-lg overflow-hidden border border-gray-200">
      {/* Image */}
      <div className="p-10 flex justify-center">
        <img
          src={image}
          alt={name}
          className="rounded-xl w-60 h-60 object-cover"
        />
      </div>
      <p className="bg-black text-white px-3 py-1 absolute top-12 right-12">
        ${price}
      </p>

      {/* Card Body */}
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">{recipe}</p>

        {/* Actions */}
        <div>
          <button
            onClick={handleAddCart}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
