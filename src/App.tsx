import React from "react";
import "./App.css";
import { Header } from "./component/header";
import { Footer } from "./component/footer";
import { StartTrading } from "./component/start-trading";

function App() {
  return (
    <>
      <Header />
      <StartTrading />
      <Footer />
    </>
  );
}

export default App;
