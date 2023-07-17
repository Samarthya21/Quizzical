import { useState, useEffect } from "react";

async function getData() {
  const res = await fetch(
    "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
  );
  return res.json();
}

export default function Options(props) {
  const [data, setData] = useState(null);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (data && data.results[props.no]) {
      const options = [...data.results[props.no].incorrect_answers];
      options.push(data.results[props.no].correct_answer);
      const shuffled = shuffleArray(options);
      setOptions(shuffled);
    }
  }, [data, props.no]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleAnswerClick = (event) => {
    const selectedAnswer = event.target.innerHTML;
    const correctAnswer = data.results[props.no].correct_answer;
    const increment = selectedAnswer === correctAnswer ? 1 : 0;
    props.onScoreChange(increment);
  };

  return (
    <div className="p-4">
      <div className="h-12 w-full flex justify-center items-center">
        <h1 className="text-center">
          {data && data.results[props.no] && data.results[props.no].question}
        </h1>
      </div>
      <div className="flex justify-center">
        {options &&
          options.map((option, index) => (
            <button
              key={index}
              onClick={handleAnswerClick}
              className="bg-white hover:bg-blue-700 text-[#4D5B9E] font-bold py-2 px-4 rounded-full mr-4 border border-teal-300"
            >
              {option}
            </button>
          ))}
      </div>
    </div>
  );
}
