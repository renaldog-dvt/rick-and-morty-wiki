import { NavLink } from "react-router";

export default function NavigationBar() {
  return (
    <nav className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <div
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">Dashboard</NavLink>
          </div>
        </div>
        <a className="btn btn-ghost text-xl">Rick & Morty Wiki</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1">
          <NavLink to="/">Dashboard</NavLink>
        </div>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </nav>
  );
}
