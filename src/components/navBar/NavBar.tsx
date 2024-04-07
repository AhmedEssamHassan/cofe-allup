import React from "react";
import { LuUserCircle2 } from "react-icons/lu";
import logo from "../../assets/images/logo.webp";
import profileImg from "../../assets/images/profile.jpg";
import { Link } from "react-router-dom";

function NavBar({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <nav className="container py-2 flex justify-between items-center">
      <div className="logo w-2/12 flex justify-start items-center">
        <img className="w-16 md:w-20" width={60} src={logo} alt="Filli" />
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <h3 className="text-Dark_Charcoal text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
          Delivery / Pickup
        </h3>
        <p className="cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl font-normal text-squant">
          Select location
        </p>
      </div>

      <Link
        to={!isLoggedIn ? `/signin` : `/profile`}
        className="w-2/12 flex justify-end items-center"
      >
        {!isLoggedIn ? (
          <LuUserCircle2 className="text-main_color text-2xl lg:text-4xl" />
        ) : (
          <img
            className="w-10 md:w-15 rounded-full"
            width={60}
            src={profileImg}
            alt="user name"
          />
        )}
      </Link>
    </nav>
  );
}

export default NavBar;
