import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <div className="app">

      <div className="card">

        <h1 className="title">⚡ COUNTER ⚡</h1>

        {/* Counter */}
        <div className="counter-box">
          <h2 className="counter">{count}</h2>
        </div>

        {/* Buttons */}
        <div className="buttons">

          <button
            className="btn increase"
            onClick={() => setCount(count + 1)}
          >
            + Increase
          </button>

          <button
            className="btn decrease"
            onClick={() => setCount(count - 1)}
          >
            - Decrease
          </button>

          <button
            className="btn reset"
            onClick={() => setCount(0)}
          >
            Reset
          </button>

        </div>

        {count >= 5 && (
          <div className="goal">
            🚀 Goal Reached!
          </div>
        )}

        {/* Input */}
        <div className="input-section">

          <input
            type="text"
            placeholder="Enter message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <p className="message">
            💬 {message}
          </p>

        </div>

      </div>

    </div>
  );
}

export default App;
