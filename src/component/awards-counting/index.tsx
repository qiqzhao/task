import "./index.css";
import MostSatisfied from "../../assets/most-satisfied.svg";
import BestEducationMaterial from "../../assets/best-education-material.svg";
import BestGlobal from "../../assets/best-global.svg";
import BestCustomerService from "../../assets/best-customer-service.svg";
import BestTradeExcetion from "../../assets/best-trade-execution.svg";
import BestCfoBroker from "../../assets/best-cfd-broker.svg";
import CompareForexBroker from "../../assets/compare-forex-broker.svg";

export const AwardsCounting = () => {
  return (
    <section className="awards-counting">
      <h2 className="awards-counting-title">Over 40 Global Industry Awards and Counting</h2>
      <div className="awards-counting-award">
        <img src={MostSatisfied} alt="" />
        <img src={BestTradeExcetion} alt="" />
        <img src={BestGlobal} alt="" />
        <img src={BestEducationMaterial} alt="" />
        <img src={BestCustomerService} alt="" />
        <img src={BestCfoBroker} alt="" />
        <img src={CompareForexBroker} alt="" />
      </div>
    </section>
  );
};
