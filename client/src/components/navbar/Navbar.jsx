"use client";
import Link from "next/link";
import React, { useState, useEffect, use } from "react";
import {signOut} from "next-auth/react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";


const Navbar = () => {
  const [showModal, setShowedModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleModal = () => setShowedModal((prev) => !prev);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);
  return (
    <div
      className={`fixde z-20 h-16 w-full top-0 left-0 ${
        isScrolled ? "shadow-md backdrop-blur" : ""
      } `}
    >
      <div className="h-full w-2/3 mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-all">
            <h1 className = {`${isScrolled ? "text-blue-600" : "text-[#cec7c7] hover:text-[#a6a1a1]"} text-2xl font-bold`}>
                TravelGod
            </h1>
            <AiOutlineHome 
            size = {25}
            color = {`${isScrolled ? "rgb(37 99 235)" : "#cec7c7"}`} />
        </Link>
        <div>
            <div className="cursor-pointer" onClick={toggleModal}>
                <AiOutlineUser
                size={30}
                color = {`${isScrolled ? "rgb(37 99 235)" : "#cec7c7"}`}
                />

            </div>
            {showModal && (
                <div 
                onClick={toggleModal} 
                className="absolute top-16 right-[270px] shadow-md flex flex-col gap-4 p-4 bg-white rounded-xl">
                    <Link href="reservations">
                        Reservations
                    </Link>
                    <button onClick={() => signOut()} className=" text-slate-500 text-center">
                        Logout
                    </button>
                    
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
