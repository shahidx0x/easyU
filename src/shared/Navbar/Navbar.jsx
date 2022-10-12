import { BsCart } from "react-icons/bs";
import { Link as LL } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <LL
            className="btn btn-ghost normal-case text-xl font-extrabold "
            to="/home"
          >
            easyU
          </LL>
        </div>
        <div className="flex-auto w-64">
          <div className="input-group justify-center">
            <input
              type="text"
              placeholder="Search in easyU"
              className="input input-bordered w-96"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-3">
          <button className="btn btn-ghost font-bold text-4xl">
            <BsCart />
          </button>
          <LL
            to="/login"
            className="btn btn-success rounded-tl-3xl rounded-br-3xl w-24 font-extrabold"
          >
            Login
          </LL>
          <LL
            to="/creating-new-user"
            className="btn btn-warning rounded-tl-3xl rounded-br-3xl font-extrabold"
          >
            Sign Up
          </LL>
        </div>
      </div>

      <div className="navbar bg-base-100">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <LL to="/home">
                <a>Home</a>
              </LL>
              <li tabIndex={0}>
                <a className="justify-between">
                  Emergency Services
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <LL
                    className="btn-ghost p-3 rounded-lg font-bold"
                    to="/emergency-service"
                  >
                    Technetian
                  </LL>
                  <li>
                    <a>Ambulence</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <LL to="/home" className="font-bold">Home</LL>
            </li>
            <li tabIndex={0}>
              <a className="font-bold">
                Emergency Services
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 z-50 w-52 bg-slate-100 shadow-lg font-medium">
                <LL
                  className="btn-ghost p-3 rounded-lg font-medium"
                  to="/emergency-service"
                >
                  Technetian
                </LL>
                <li>
                  <a>Ambulence</a>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <a className="font-bold">
                Find W/P
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 z-50 w-52 bg-slate-100 shadow-lg font-medium">
                <LL
                  className="btn-ghost p-3 rounded-lg font-medium"
                  to="/wp-service"
                >
                  Workshop
                </LL>
                <li>
                  <a>Petrol Pump</a>
                </li>
              </ul>
            </li>
            <LL
              className="btn-ghost p-3 rounded-lg font-bold"
              to="/buy-products"
            >
              Equipment
            </LL>
            <li tabIndex={0}>
              <a className="font-bold">
                Booking
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 z-50 w-52 bg-slate-100 shadow-lg font-medium">
                <LL
                  className="btn-ghost p-3 rounded-lg font-medium"
                  to="/emergency-service"
                >
                  Washing
                </LL>
                <li>
                  <a>Serviceing</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="font-bold">Xtra-Benefit</a>
            </li>
            <li tabIndex={0}>
              <a className="font-bold">
                More
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 z-50 w-52 bg-slate-100 shadow-lg font-medium">
                <LL
                  className="btn-ghost p-3 rounded-lg font-medium"
                  to="/home"
                >
                  About Us
                </LL>
                <li>
                  <a>Contact Us</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
};
