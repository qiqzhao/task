import React from "react";
import "./App.css";
import { Header } from "./component/header";
import { TradeTrust } from "./component/trade-trust";
import { AwardsCounting } from "./component/awards-counting";
import { TradingExperience } from "./component/trading-experiences";
import { AvailableType } from "./component/available-type";
import { TradingApp } from "./component/trading-app";
import { WebTrader } from "./component/web-trader";
import { StartTrading } from "./component/start-trading";
import { Footer } from "./component/footer";

function App() {
  return (
    <>
      <Header />
      <TradeTrust />
      <div className="content">
        <AwardsCounting />
        <TradingExperience />
        <AvailableType />
        <TradingApp />
        <WebTrader />
      </div>
      <StartTrading />
      <Footer />
    </>
  );
}

export default App;
