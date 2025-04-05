import {
  FaBars,
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaPhone,
  FaPlus,
  FaShoppingCart,
  FaStore,
  FaSwatchbook,
  FaUsers,
} from "react-icons/fa";
import { FaAlipay } from "react-icons/fa6";
import { MdRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  const [isAdmin] = useAdmin();
  const userMenuItems = [
    { to: "/dashboard/userHome", icon: <FaHome />, label: "USER HOME" },
    {
      to: "/dashboard/reservation",
      icon: <FaCalendar />,
      label: "RESERVATION",
    },
    {
      to: "/dashboard/paymentHistory",
      icon: <FaAlipay />,
      label: "PAYMENT HISTORY",
    },
    {
      to: "/dashboard/cart",
      icon: <FaShoppingCart />,
      label: `MY CART (${cart.length})`,
    },
    { to: "/dashboard/review", icon: <MdRateReview />, label: "ADD REVIEW" },
    { to: "/dashboard/booking", icon: <FaSwatchbook />, label: "MY BOOKING" },
  ];
  const adminMenuItems = [
    { to: "/dashboard/adminHome", icon: <FaHome />, label: "ADMIN HOME" },
    { to: "/dashboard/addItems", icon: <FaPlus />, label: "ADD ITEMS" },
    { to: "/dashboard/manageItems", icon: <FaList />, label: "MANAGE ITEMS" },
    {
      to: "/dashboard/manageUsers",
      icon: <FaBook />,
      label: "MANAGE BOOKINGS",
    },
    { to: "/dashboard/allUsers", icon: <FaUsers />, label: "ALL USERS" },
  ];
  const menuItems = isAdmin ? adminMenuItems : userMenuItems;

  const lastMenuItems = [
    { to: "/", icon: <FaHome />, label: "HOME" },
    { to: "/menu", icon: <FaBars />, label: "MENU" },
    { to: "/shop/dessert", icon: <FaStore />, label: "SHOP" },
    { to: "/dashboard/contact", icon: <FaPhone />, label: "CONTACT" },
  ];
  return (
    <div className="flex">
      <div className="w-64 min-h-full bg-amber-500">
        <ul className="space-y-2 py-5">
          {menuItems.map(({ to, icon, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-md transition-all ${
                    isActive
                      ? "bg-teal-700 text-white font-bold"
                      : "text-gray-700 hover:bg-gray-200"
                  }`
                }
              >
                {icon} <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <hr />
        <div>
          <ul className="space-y-2 py-5">
            {lastMenuItems.map(({ to, icon, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2 rounded-md transition-all ${
                      isActive
                        ? "bg-teal-700 text-white font-bold"
                        : "text-gray-700 hover:bg-gray-200"
                    }`
                  }
                >
                  {icon} <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1 p-4 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
