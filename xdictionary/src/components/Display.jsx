import { useState } from "react";

const dictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

const Display = () => {
  const [defination, setDefination] = useState("");
  const handle = (e) => {
    e.preventDefault();
    const val = e.target.inputword.value.toLowerCase();
    const meaning = dictionary.find((words) => {
      const val1 = words.word.toLowerCase();
      if (val1 === val) return words;
    });
    if (meaning) {
      const def = meaning.meaning;
      setDefination(def);
    } else {
      setDefination("Word not found in the dictionary.");
    }
  };
  return (
    <>
      <h1>Dictionary App</h1>
      <form onSubmit={(e) => handle(e)}>
        <input type="text" name="inputword"></input>
        <button type="submit">Search</button>
      </form>
      <h3>Definition:</h3>
      <p>{defination}</p>
    </>
  );
};
export default Display;
