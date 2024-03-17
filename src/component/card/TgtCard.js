import React, { useState } from "react";

import arrow from "../../assets/arrow-south.svg";
import copy from "../../assets/copy.png";
import share from "../../assets/share.png";
import "../../styles/components/card.scss";
import "../../styles/components/tgtCard.scss";

const TgtCard = ({ targetLan }) => {
  const [result, setResult] = useState("");
  return (
    <div className="card tgt">
      <div className="card-wrapper">
        <div className="card-top tgt">
          <div className="card-tg-btn-container tgt">
            <button className="card-tgLan-btn tgt">{targetLan}</button>
            <button className="card-arrow-btn tgt">
              <img src={arrow} />
            </button>
          </div>
        </div>
        <div className="card-mid tgt">
          <p className="card-mid-content">{result}</p>
        </div>
        <div className="card-bottom tgt">
          <div className="card-bottom-btn-container tgt">
            <button className="card-bottom-copy-btn tgt">
              <img src={copy} />
            </button>
            <button className="card-bottom-share-btn tgt">
              <img src={share} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TgtCard;
