import React from "react";

import "../styles/style.scss";
import "../styles/components/main.scss";
import SrcCard from "../component/card/SrcCard";
import TgtCard from "../component/card/TgtCard";

const Main = () => {
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
  const sourceLan = "한국어";
  const targetLan = "영어";
  return (
    <div className="main">
      <div className="card-container">
        <SrcCard sourceLan={sourceLan} targetLan={targetLan}></SrcCard>
        <TgtCard targetLan={targetLan}></TgtCard>
      </div>
    </div>
  );
};

export default Main;
