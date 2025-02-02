import { BiSolidUser } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="shadow">
      <div className="navbar container mx-auto  bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
                <ul className="p-2">
                  <li>
                    <a>College history</a>
                  </li>
                  <li>
                    <a>Principle</a>
                  </li>
                  <li>
                    <a>Vice principle</a>
                  </li>
                  <li>
                    <a>Administration</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Departments</a>
              </li>
              <li>
                <a>Gallery</a>
              </li>
              <li>
                <a>News & Events</a>
                <ul className="p-2">
                  <li>
                    <a>Notice</a>
                  </li>
                  <li>
                    <a>News</a>
                  </li>
                  <li>
                    <a>Events</a>
                  </li>
                  <li>
                    <a>Class Routine</a>
                  </li>
                  <li>
                    <a>Board result check</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>About us</summary>
                <ul className="p-2">
                  <li>
                    <a>College history</a>
                  </li>
                  <li>
                    <a>Principle</a>
                  </li>
                  <li>
                    <a>Vice principle</a>
                  </li>
                  <li>
                    <a>Administration</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Departments</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>News & Events</summary>
                <ul className="p-2">
                  <li>
                    <a>Notice</a>
                  </li>
                  <li>
                    <a>News</a>
                  </li>
                  <li>
                    <a>Events</a>
                  </li>
                  <li>
                    <a>Class Routine</a>
                  </li>
                  <li>
                    <a>Board result check</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle flex justify-center items-center avatar"
            >
              <div className="">
                <BiSolidUser className="text-3xl" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
