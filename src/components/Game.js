import React, { useEffect, useState } from "react";
import { addName } from "../utils/gameSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const navigate = useNavigate();
  const { names } = useSelector((store) => store.game);
  const dispatch = useDispatch();
  const handleClick = () => {
    navigate("/");
  };
  const [wins1, setWins1] = useState(0);
  const [wins2, setWins2] = useState(0);
  const [winner, setWinner] = useState();
  const [winDiff, setWinDiff] = useState(0);
  const [warning, setWarning] = useState(false);

  const [diff, setDiff] = useState(1);

  console.log(names);

  const saveItems = () => {
    localStorage.setItem("player1Name", names?.[0]);
    localStorage.setItem("player2Name", names?.[1]);
    localStorage.setItem("player1Score", wins1);
    localStorage.setItem("player2Score", wins2);
    alert("Game Saved Successfully");
  };

  const addWin1 = () => {
    setWins1(wins1 + 1);

    if (wins1 === 10 && wins2 === 10) {
      setDiff(2);
    }
  };

  const addWin2 = () => {
    setWins2(wins2 + 1);

    if (wins1 === 10 && wins2 === 10) {
      setDiff(2);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("player1Name")) {
      setWins1(Number(localStorage.getItem("player1Score")));
      setWins2(Number(localStorage.getItem("player2Score")));
      dispatch(
        addName([
          localStorage.getItem("player1Name"),
          localStorage.getItem("player2Name"),
        ])
      );
    }
  }, []);

  useEffect(() => {
    if (wins1 >= 11 && wins1 - wins2 >= diff) {
      setWarning(true);
      alert(`${winner} won`);
      setWins1(0);
      setWins2(0);
    }
    if (wins2 >= 11 && wins2 - wins1 >= diff) {
      alert(`${winner} won`);
      setWins1(0);
      setWins2(0);
    }

    if (wins1 === 10 && wins2 === 10) alert("Tied!!");
    if (wins1 > wins2) setWinner(names?.[0]);
    if (wins2 > wins1) setWinner(names?.[1]);
    if (wins1 === wins2) setWinner("Tied");
    if (wins1 > wins2) setWinDiff(wins1 - wins2);
    if (wins1 === wins2) setWinDiff(0);
    if (wins1 < wins2) setWinDiff(wins2 - wins1);
  }, [wins1, wins2]);

  return (
    <div>
      <h1
        className="text-blue-600 font-xl border-2 border-blue-600 m-2 w-40 text-center mx-auto hover:cursor-pointer hover:scale-110 duration-100"
        onClick={handleClick}
      >
        New Game
      </h1>
      <div className=" flex flex-col gap-8 py-10 text-blue-600 font-semibold border-4 border-blue-600 w-[50%] mx-auto mt-10">
        <div className="flex justify-between items-center w-[40%] mx-auto ">
          <h1>{names?.[0]}</h1>
          <button
            onClick={() => {
              addWin1();
            }}
            className="border-2 border-blue-600 p-1 hover:scale-105 duration-100"
          >
            Add win
          </button>
        </div>
        <div className="flex justify-between w-[20%] items-center mx-auto">
          <h1>Wins:</h1>
          <h1 className="text-6xl">{wins1}</h1>
        </div>
        <div className="flex justify-between items-center w-[40%] mx-auto ">
          <h1>{names?.[1]}</h1>
          <button
            onClick={() => {
              addWin2();
            }}
            className="border-2 border-blue-600 p-1 hover:scale-105 duration-100"
          >
            Add win
          </button>
        </div>
        <div className="flex justify-between items-center w-[20%] mx-auto">
          <h1>Wins:</h1>
          <h1 className="text-6xl">{wins2}</h1>
        </div>
        <div className="flex justify-between  items-center w-[40%] mx-auto ">
          <h1>Current Winner:</h1>

          <h1>{winner}</h1>
        </div>
        <div className="flex justify-between items-center w-[40%] mx-auto ">
          <h1>Win difference:</h1>

          <h1>{winDiff}</h1>
        </div>
        <button
          className="bg-blue-600 text-white p-2 w-48 mx-auto rounded-lg font-semibold hover:scale-105 duration-100"
          onClick={() => saveItems()}
        >
          Save Game
        </button>
      </div>
    </div>
  );
};

export default Game;
