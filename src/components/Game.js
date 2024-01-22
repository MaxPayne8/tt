import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Game = () => {
  const { names } = useSelector((store) => store.game);
  const [wins1, setWins1] = useState(0);
  const [wins2, setWins2] = useState(0);
  const items = JSON.parse(localStorage.getItem("items"));
  console.log(items);
  console.log(names);
  const addWin1 = () => {
    if (wins1 < 11) setWins1(wins1 + 1);
  };
  const addWin2 = () => {
    if (wins2 < 11) setWins2(wins2 + 1);
  };
  useEffect(() => {
    if (wins1 === 11 && wins1 - wins2 >= 1) alert("player1 won");
    if (wins2 === 11 && wins2 - wins1 >= 1) alert("player2 won");
  });
  return (
    <div className=" flex flex-col gap-8 py-10">
      <div className="flex justify-between w-[40%] mx-auto ">
        <h1>{items[0]}</h1>
        <button
          onClick={() => {
            addWin1();
          }}
        >
          Add win
        </button>
      </div>
      <div className="flex justify-between w-[20%] mx-auto">
        <h1>Wins:</h1>
        <h1>{wins1}</h1>
      </div>
      <div className="flex justify-between w-[40%] mx-auto ">
        <h1>{items[1]}</h1>
        <button
          onClick={() => {
            addWin2();
          }}
        >
          Add win
        </button>
      </div>
      <div className="flex justify-between w-[20%] mx-auto">
        <h1>Wins:</h1>
        <h1>{wins2}</h1>
      </div>
    </div>
  );
};

export default Game;
