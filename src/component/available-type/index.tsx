import { Card } from "./card";
import { ROW_DATA, STANDARD_DATA } from "./fixture";
import "./index.css";

export const AvailableType = () => {
  return (
    <section className="available-type">
      <h2>What account types are available?</h2>
      <div >
        <div className="available-type-cards">
          <Card {...STANDARD_DATA} />
          <Card className="row" {...ROW_DATA} />
        </div>
        <p className="available-type-more">
          For more information about account types - <a href=".">Click here</a>
        </p>
      </div>
    </section>
  );
};
