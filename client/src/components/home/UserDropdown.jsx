import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UserDropdown = () => {
  const { user, Logout } = useAuth();

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={`${user?.photoURL || "/user.jpg"}`}
          />
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
  );
};

export default UserDropdown;
