import { NavLink } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import useUserData from "../../hooks/useUserData";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import { FaRegHeart } from "react-icons/fa";

const sellerRoutes = [
  {
    id: 1,
    route: "/dashboard/my-products",
    title: "My Products",
    icon: <MdOutlineInventory2 />,
  },
  {
    id: 2,
    route: "/dashboard/add-products",
    title: "Add Products",
    icon: <IoIosAddCircleOutline />,
  },
];
const BuyRoutes = [
  {
    id: 1,
    route: "/dashboard/wishlist",
    title: "My Wishlist",
    icon: <FaRegHeart />,
  },
];

const Sidebar = () => {
  const userData = useUserData();
  const { Logout } = useAuth();
  return (
    <div className="bg-gray-100 border-r-2 border-black h-full px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Gadget Shop</h1>
      <ul className="flex flex-col gap-2">
        <li className="p-2 border border-black rounded-md">
          <NavLink to="/dashboard/overview" className="flex items-center gap-2">
            <GrOverview />
            <p>Overview</p>
          </NavLink>
        </li>

        {userData.role === "seller" &&
          sellerRoutes.map((route) => (
            <li key={route.id} className="p-2 border border-black rounded-md">
              <NavLink to={route.route} className="flex items-center gap-2">
                <>{route.icon}</>
                <p>{route.title}</p>
              </NavLink>
            </li>
          ))}
        {userData.role === "buyer" &&
          BuyRoutes.map((route) => (
            <li key={route.id} className="p-2 border border-black rounded-md">
              <NavLink to={route.route} className="flex items-center gap-2">
                <>{route.icon}</>
                <p>{route.title}</p>
              </NavLink>
            </li>
          ))}

        <li className="p-2 border border-black rounded-md">
          <NavLink to="/" className="flex items-center gap-2">
            <IoHomeOutline />
            <p>Home</p>
          </NavLink>
        </li>
        <li
          className="p-2 border border-black rounded-md"
          onClick={() => Logout()}
        >
          <NavLink className="flex items-center gap-2">
            <BiLogOut />
            <p>Logout</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
