import { RiDeleteBin5Line } from "react-icons/ri";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  // Calculate total price dynamically
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // delete item from cart and server
  const handleDelete = (id, name) => {
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
        axiosSecure.delete(`/cart/${id}`).then((res) => {
          // console.log(res);
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${name} has been removed from the cart.`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl">Total Items: {cart.length}</h2>
        <h2 className="text-3xl">Total Price: ${totalPrice.toFixed(2)}</h2>
        <Link to={"/dashboard/payment"}>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition">
            Pay
          </button>
        </Link>
      </div>

      {/* Table Section */}
      <div className="flex items-center justify-center px-4">
        <div className="overflow-x-auto w-full">
          <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-200">
            <thead className="bg-gray-50">
              <tr className="border-b">
                <th className="px-6 py-4 text-left text-gray-600 font-medium">
                  #
                </th>
                <th className="px-6 py-4 text-left text-gray-600 font-medium">
                  Item Image
                </th>
                <th className="px-6 py-4 text-center text-gray-600 font-medium">
                  Item Name
                </th>
                <th className="px-6 py-4 text-center text-gray-600 font-medium">
                  Price
                </th>
                <th className="px-6 py-4 text-center text-gray-600 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-b even:bg-gray-100 hover:bg-gray-200"
                >
                  {/* Item Number */}
                  <td className="px-3 align-middle text-center">
                    <p className="text-gray-800 font-medium">{index + 1}</p>
                  </td>
                  {/* Item Image */}
                  <td className="px-6 py-4 align-middle">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-md"
                    />
                  </td>

                  {/* Item Name */}
                  <td className="px-3 align-middle text-center">
                    <p className="text-gray-800 font-medium">{item.name}</p>
                  </td>

                  {/* Price */}
                  <td className="px-6 py-4 align-middle text-center">
                    ${item.price.toFixed(2)}
                  </td>

                  {/* Action (Delete Icon) */}
                  <td className="px-6 py-4 align-middle">
                    <div
                      onClick={() => handleDelete(item._id, item.name)}
                      className="flex justify-center items-center"
                    >
                      <RiDeleteBin5Line
                        size={22}
                        className="text-red-600 cursor-pointer hover:text-red-800 transition duration-200"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
