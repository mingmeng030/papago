import React from "react";
import "./styles/style.scss";
import Main from "./page/Main";
import Footer from "./component/Footer";
import Header from "./component/Header";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Main />
      <Footer></Footer>
    </div>
  );
};

export default App;
