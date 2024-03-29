import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addName } from "../utils/gameSlice";

const Start = () => {
  console.log("chl gaya");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addName([player1.current.value, player2.current.value]));
    localStorage.setItem("player1Name", "");
    localStorage.setItem("player2Name", "");
    localStorage.setItem("player1Score", 0);
    localStorage.setItem("player2Score", 0);
    if (!player1.current.value.length || !player2.current.value.length)
      alert("Please enter name");
    else navigate("/play");
  };
  const player1 = useRef();
  const player2 = useRef();

  return (
    <div className=" flex justify-center items-center h-screen text-blue-600 font-semibold ">
      <form
        className=" border-4 border-blue-600 p-9"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="my-10">
          <h1>Player One Name*</h1>
          <input
            className="border-2 border-blue-600 mt-2 px-1"
            ref={player1}
          ></input>
        </div>

        <div className="my-10">
          <h1>Player Two Name*</h1>
          <input
            className="border-2 mt-2 border-blue-600 px-1"
            ref={player2}
          ></input>
        </div>

        <button className="block w-full border-2 border-blue-600 hover:scale-110 duration-100">
          Continue
        </button>
      </form>
    </div>
  );
};

export default Start;
