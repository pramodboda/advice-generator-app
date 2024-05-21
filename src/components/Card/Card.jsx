import React, { useState, useEffect } from "react";
import dividerDesktop from "../../../images/pattern-divider-desktop.svg";
import dividerMobile from "../../../images/pattern-divider-mobile.svg";
import dice from "../../../images/icon-dice.svg";

import axios from "axios";

function Card() {
  const [advice, setAdvice] = useState(null);
  const getAdvice = async () => {
    const res = await axios.get("https://api.adviceslip.com/advice");
    // console.log(res.data);
    const advice = await res.data.slip;
    setAdvice(advice);
  };

  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div className="card">
      <div className="advice-no">ADVICE #{advice ? advice.id : "117"}</div>
      <div className="card-body">
        {advice
          ? advice.advice
          : "It is easy to sit up and take notice, what's difficult is getting up and taking action."}
      </div>
      <img
        src={dividerDesktop}
        className="divider-desktop"
        alt="divider-desktop"
      />
      <img
        src={dividerMobile}
        className="divider-mobile"
        alt="divider-mobile"
      />

      <div
        className="dice-btn"
        onClick={() => {
          getAdvice();
        }}
      >
        <img src={dice} alt="dice" />
      </div>
    </div>
  );
}

export default Card;
