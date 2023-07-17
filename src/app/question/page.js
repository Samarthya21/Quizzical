"use client"
import { useState } from "react";
import Start from "@/components/Start";
import Options from "@/components/Options.js";

export default function Question() {
  const [on, setOn] = useState(true);
  const [score, setScore] = useState(0);

  const handleScoreChange = (increment) => {
    setScore((prevScore) => prevScore + increment);
  };

  return (
    <main className="p-24 flex justify-center">
      <div>
        {on ? (
          <>
            <Options no={0} onScoreChange={handleScoreChange} />
            <Options no={1} onScoreChange={handleScoreChange} />
            <Options no={2} onScoreChange={handleScoreChange} />
            <Options no={3} onScoreChange={handleScoreChange} />
            <Options no={4} onScoreChange={handleScoreChange} />
            <button className="ml-64 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Score {score}
</button>
          </>
        ) : (
          <Start onStart={() => setOn(true)} />
        )}
      </div>
    </main>
  );
}
