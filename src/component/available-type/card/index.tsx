import { Key } from "react";
import "./index.css";

export const Card = ({ type, title, mt, list, className }: any) => {
  return (
    <div className={`card ${className}`}>
      <span className="card-type">{type}</span>
      <h3 className="card-title">{title}</h3>
      <span className="card-mt">{mt}</span>
      {list.map(({ label, value }: any, index: Key | null | undefined) => (
        <div key={index} className="card-list">
          <span className="card-list-label">{label}</span>
          <span className="card-list-value">{value}</span>
        </div>
      ))}
      <button>START TRADING NOW</button>
      <a href=".">TRY A FREE DEMO</a>
    </div>
  );
};
