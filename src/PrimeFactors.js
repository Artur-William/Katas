import React from "react";
import "./index.css";

function PrimeFactors() {
  return (
    <section className="section">
      <div className="title">
        <h1>PrimeFactors</h1>
      </div>
      <div className="form">
        <input
          type="text"
          class="form__prime"
          placeholder="Enter your number here"
        />
        <button>check this out</button>
      </div>
    </section>
  );
}

export default PrimeFactors;
