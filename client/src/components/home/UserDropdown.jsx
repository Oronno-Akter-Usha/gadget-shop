import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData";

const UserDropdown = () => {
  const { user, Logout } = useAuth();
  const userData = useUserData();

  return (
    <div>
      <button className="btn">
        wishlist
        <div className="badge badge-secondary">
          {userData?.wishlist?.length}
        </div>
      </button>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={`${user?.photoURL || "/user.jpg"}`}
              />
            </div>
          </div>
        </div>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow flex flex-col gap-2"
        >
          <li>
            <NavLink to="/dashboard/overview">Dashboard</NavLink>
          </li>
          <li>
            <button
              onClick={Logout}
              className="btn btn-primary btn-outline btn-sm"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDropdown;
