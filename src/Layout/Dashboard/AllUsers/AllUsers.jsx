import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaHandHoldingMedical, FaUser, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        alert("Admin");
      }
    });
  };

  const handleDeleteUser = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${user.name} has been removed from the user list.`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex items-center justify-evenly">
        <h1 className="text-3xl font-medium">All Users</h1>
        <h1 className="text-3xl font-medium">Total Users: {users.length}</h1>
      </div>
      <div className="flex items-center justify-center px-4">
        <div className="overflow-x-auto w-full">
          <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-200">
            <thead className="bg-gray-50">
              <tr className="border-b">
                <th className="px-6 py-4 text-left text-gray-600 font-medium">
                  #
                </th>
                <th className="px-6 py-4 text-left text-gray-600 font-medium">
                  NAME
                </th>
                <th className="px-6 py-4 text-center text-gray-600 font-medium">
                  EMAIL
                </th>
                <th className="px-6 py-4 text-center text-gray-600 font-medium">
                  ROLE
                </th>
                <th className="px-6 py-4 text-center text-gray-600 font-medium">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className="border-b even:bg-gray-100 hover:bg-gray-200"
                >
                  {/* Item Number */}
                  <td className="px-3 align-middle text-center">
                    <p className="text-gray-800 font-medium">{index + 1}</p>
                  </td>

                  {/* User Name */}
                  <td className="px-3 align-middle text-center">
                    <p className="text-gray-800 font-medium">{user.name}</p>
                  </td>
                  {/* User Email */}
                  <td className="px-3 align-middle text-center">
                    <p className="text-gray-800 font-medium">{user.email}</p>
                  </td>

                  {/* Action (Admin Icon) */}
                  <td className="px-6 py-4 align-middle">
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <div
                        onClick={() => handleMakeAdmin(user)}
                        className="flex justify-center items-center"
                      >
                        <FaUsers
                          size={22}
                          className="text-red-600 cursor-pointer hover:text-red-800 transition duration-200"
                        />
                      </div>
                    )}
                  </td>
                  {/* Action (Delete Icon) */}
                  <td className="px-6 py-4 align-middle">
                    <div
                      onClick={() => handleDeleteUser(user)}
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

export default AllUsers;
