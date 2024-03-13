import React from "react";

import arrow from "../../assets/arrow-south.svg";
import copy from "../../assets/copy.png";
import exchange from "../../assets/exchange.png";

import "../../styles/components/srcCard.scss";
import "../../styles/components/card.scss";

const SrcCard = ({ sourceLan, targetLan }) => {
  const country = [
    { name: "한국어", code: "ko" },
    { name: "영어", code: "en" },
    { name: "일본어", code: "ja" },
    { name: "중국어 간체", code: "zh-CN" },
    { name: "중국어 번체", code: "zh-TW" },
    { name: "프랑스어", code: "fr" },
    { name: "러시아어", code: "ru" },
    { name: "베트남어", code: "vi" },
    { name: "이탈리아어", code: "it" },
    { name: "인도네시아어", code: "id" },
    { name: "태국어", code: "th" },
    { name: "독일어", code: "de" },
  ];

  return (
    <div className="card src">
      <div className="card-top src">
        <div className="card-src-btn-container src">
          <button className="card-srcLan-btn src">{sourceLan}</button>
          <button className="card-arrow-btn src">
            <img src={arrow} />
          </button>
        </div>
        <button className="card-src-exchange-btn">
          <img src={exchange}></img>
        </button>
        <div className="card-tg-btn-container src">
          <button className="card-tgLan-btn src">{targetLan}</button>
          <button className="card-arrow-btn src">
            <img src={arrow} />
          </button>
        </div>
      </div>

      <div className="card-mid src">
        <textarea placeholder="번역할 내용을 입력하세요"></textarea>
      </div>

      <div className="card-bottom src">
        <div className="card-bottom-btn-container src">
          <button className="card-bottom-copy-btn src">
            <img src={copy} />
          </button>
        </div>
        <button className="card-bottom-translate-btn">
          <span className="translate-btn long">번역하기</span>
          <span className="translate-btn short">번역</span>
        </button>
      </div>
    </div>
  );
};

export default SrcCard;
