import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from '@mui/material/Avatar';
// import { useNavigate } from "react-router-dom";
export default function NavBar() {
  const [showUserDropDown, setShowUserDropDown] = useState(null);
  const open = Boolean(showUserDropDown);
  const handleClick = (event) => {
    setShowUserDropDown(event.currentTarget);
  };
  const handleClose = () => {
    setShowUserDropDown(null);
  };
  // const navigate = useNavigate();

  return (
    <div>
      <nav className="flex items-center justify-center w-full bg-white shadow-lg ">
        <div className="flex flex-row items-center justify-around w-full lg:mx-28">
          {/* Main Menu */}
          <div className="items-center justify-center basis-1/4 ">
            <h1 className="text-lg font-semibold text-gray-500">FunBook</h1>
          </div>
          {/* navigation links */}
          <form className="items-center basis-2/5">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
          </form>
          {/* dropdown */}
          <div className="">
          <Avatar>
            <Button
              id="basic-button"
              className="relative inline-flex items-center px-4 py-3 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
             RK
            </Button>
            </Avatar>
            <Menu
              id="basic-menu"
              anchorEl={showUserDropDown}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </nav>
    </div>
  );
}
