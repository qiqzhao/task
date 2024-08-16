import MobileDevice from "../../assets/mobile-devices.png";
import "./index.css";

export const TradingExperience = () => {
  return (
    <section className="trading-experience">
      <div className="trading-experience-container">
        <div className="trading-experience-content">
          <h3>A World-Class Trading Experience</h3>
          <p>
            Experience the FP Markets difference with 18 years of expertise with
            our award-winning service, top-tier trading platforms, 24/7
            multi-lingual support, extensive market access - all combined to
            enhance your trading journey.
          </p>
          <h3>Explore a World of Trading Options</h3>
          <p>
            Trade with over 70+ Forex pairs, over 10,000 stocks, major global
            indices, diverse commodities, bonds, metals, and popular
            cryptocurrencies tailored for every trading style.
          </p>
          <h3>Empower Trades with Cutting-Edge Platforms</h3>
          <p>
            Gain access to top-rated platforms and advanced tools for an edge in
            the financial markets.
          </p>
        </div>

        <img src={MobileDevice} alt="" />
      </div>
    </section>
  );
};
