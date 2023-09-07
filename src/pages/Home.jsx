import React from "react";
import menubg from "../assets/2home.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <menu>
        <main className=" w-full h-screen py-1 bg-black/40">
          <div className=" w-full h-screen absolute">
            <img
              className="w-full h-full object-cover mix-blend-overlay"
              src={menubg}
              alt="bg image"
            />
          </div>

          <div className="grid grid-cols-1 justify-center gap-4 h-[50%] my-[40%] relative md:my-[40%] lg:my-[20%]">
            <div className="px-1">
              <h1
                className="font-bold text-4xl  text-white text-center font-serif lg:text-7xl"
                style={{ textShadow: "5px 3px black" }}
              >
                WELCOME TO RAYMOND'S HOUSE
              </h1>
            </div>
            <div className="mt-10 h-[250px] pt-10">
              <Link to="/sweeper">
                <button className="ml-[80px] bg-yellow-600 border-2 border-white rounded-lg text-white w-[60%] py-3 px-6 sm:w-[30%] my-4 md:w-[40%] mx-6 ">
                  PAY SWEEPER
                </button>
              </Link>
              <Link to="/sweeper">
                <button className="ml-[50px] bg-yellow-600 border-2 border-white rounded-lg text-white w-[75%] py-3 px-6 sm:w-[30%] my-4 md:w-[40%]">
                  PUMPING WATER
                </button>
              </Link>
            </div>
          </div>
        </main>
      </menu>
    </>
  );
};

export default Home;
