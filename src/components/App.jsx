import { useEffect, useState } from "react";
import data from "../data/data.json";

function getRandomNumber(min, max) {
  var randomDecimal = Math.random();
  var randomNumber = randomDecimal * (max - min + 1) + min;
  randomNumber = Math.floor(randomNumber);
  return randomNumber;
}

export default function App() {
  const [qoute, setQoute] = useState();

  const generateQoute = () => {
    setQoute(data[getRandomNumber(0, data.length - 1)]);
  };

  useEffect(generateQoute, []);

  return (
    qoute && (
      <>
        <div style={{ width: "100%", textAlign: "center" }}>
          <div id="qoute-box">
            <h1 id="text">{qoute.quote}</h1>
            <br />
            <p id="author">{qoute.author}</p>
            <button id="new-qoute" onClick={generateQoute}>
              New Quote
            </button>
            <a href="twitter.com/intent/tweet" id="tweet-qoute">
              Tweet
            </a>
          </div>
        </div>
      </>
    )
  );
}
