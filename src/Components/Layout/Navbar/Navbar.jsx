import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom/dist";

const NavData = [
  {
    _id: 1,
    label: "Dashboard",
    link: "/",
  },
  {
    _id: 2,
    label: "Book Ticket",
    link: "/tickets",
  },
];

const Navbar = () => {
  const [select, setSelect] = useState(false);
  const { pathname } = useLocation();

  const handleSelect = () => {};

  return (
    <div className="navbar__layout">
      <div className="container">
        <div className="navbar">
          <h1 className="text-lg flex items-center gap-4 font-semibold text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
              />
            </svg>
            Bus-App
          </h1>
          <div className="relative inline-block text-left">
            <div>
              <button
                onClick={() => setSelect((prev) => !prev)}
                type="button"
                className="inline-flex w-full  justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white hover:bg-white-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                {pathname === "/" ? "Dashboard" : "Book Tickets"}
                <svg
                  className="-mr-1 h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {select && (
              <div
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div className="py-1" role="none">
                  {NavData.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      onClick={() => handleSelect(item.label)}
                      className={
                        pathname === item.link
                          ? "text-red-500 font-semibold block px-4 py-2 text-sm  hover:bg-white-50"
                          : "text-gray-700 block px-4 py-2 text-sm  hover:bg-white-50"
                      }
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
