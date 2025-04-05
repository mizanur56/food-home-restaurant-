import { FaEdit } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { RiDeleteBin5Line } from "react-icons/ri";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been removed from the menu.`,
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div>
      <SectionTitle
        heading="hurry up"
        subHeading="MANAGE ALL ITEMS"
      ></SectionTitle>
      <div className="flex items-center justify-center px-4">
        <div className="overflow-x-auto w-full">
          <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-200">
            <thead className="bg-gray-50">
              <tr className="border-b">
                <th className="px-6 py-4 text-left text-gray-600 font-medium">
                  #
                </th>
                <th className="px-6 py-4 text-left text-gray-600 font-medium">
                  ITEM IMAGE
                </th>
                <th className="px-6 py-4 text-center text-gray-600 font-medium">
                  ITEM NAME
                </th>
                <th className="px-6 py-4 text-center text-gray-600 font-medium">
                  PRICE
                </th>
                <th className="px-6 py-4 text-center text-gray-600 font-medium">
                  ACTION
                </th>
                <th className="px-6 py-4 text-center text-gray-600 font-medium">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr
                  key={index}
                  className="border-b even:bg-gray-100 hover:bg-gray-200"
                >
                  {/* Item Number */}
                  <td className="px-3 align-middle text-center">
                    <p className="text-gray-800 font-medium">{index + 1}</p>
                  </td>
                  <td className="px-6 py-4 align-middle">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-md"
                    />
                  </td>

                  {/* User Name */}
                  <td className="px-3 align-middle text-center">
                    <p className="text-gray-800 font-medium">{item.name}</p>
                  </td>
                  {/* User Email */}
                  <td className="px-3 align-middle text-center">
                    <p className="text-gray-800 font-medium">${item.price}</p>
                  </td>

                  {/* Action (update Icon) */}
                  <td className="px-6 py-4 align-middle">
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <div className="flex justify-center items-center">
                        <FaEdit
                          size={22}
                          className="text-red-600 cursor-pointer hover:text-red-800 transition duration-200"
                        />
                      </div>
                    </Link>
                  </td>
                  {/* Action (Delete Icon) */}
                  <td className="px-6 py-4 align-middle">
                    <div
                      onClick={() => handleDeleteItem(item)}
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

export default ManageItems;
