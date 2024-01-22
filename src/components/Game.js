import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Game = () => {
  const { names } = useSelector((store) => store.game);
  const [wins1, setWins1] = useState(0);
  const [wins2, setWins2] = useState(0);
  const [winner, setWinner] = useState();
  const [winDiff, setWinDiff] = useState(0);
  const [warning, setWarning] = useState(false);

  const [diff, setDiff] = useState(1);

  console.log(names);

  const saveItems = () => {};

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
  });
  return (
    <div className=" flex flex-col gap-8 py-10 text-blue-600 font-semibold border-4 border-blue-600 w-[50%] mx-auto mt-10">
      <div className="flex justify-between items-center w-[40%] mx-auto ">
        <h1>{names?.[0]}</h1>
        <button
          onClick={() => {
            addWin1();
          }}
          className="border-2 border-blue-600 p-1"
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
          className="border-2 border-blue-600 p-1"
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
        className="bg-blue-600 text-white p-2 w-48 mx-auto rounded-lg font-semibold"
        onClick={() => saveItems()}
      >
        Save Game
      </button>
    </div>
  );
};

export default Game;
