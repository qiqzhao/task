import WebTraderIcon from "../../assets/webtrader.png";
import Autochartist from "../../assets/autochartist.png";
import Toolbox from "../../assets/toolbox.png";
import Vps from "../../assets/vps.png";

import "./index.css";

const data = [
  {
    title: "WebTrader",
    icon: WebTraderIcon,
    content:
      "Trade seamlessly on your browser, blending functionality and flexibility for trading on any device​.",
  },
  {
    title: "VPS Solutions",
    icon: Vps,
    content:
      "Perfect for running Expert Advisors (EAs), scalping, and auto-trading with minimal latency for the best execution speeds​ to optimise your trading.",
  },
  {
    title: "Autochartist",
    icon: Autochartist,
    content:
      "Save time and enhance your market analysis with Autochartist, the leading automated pattern-recognition tool that scans the markets for trading opportunities​.",
  },
  {
    title: "WebTraders Toolbox",
    icon: Toolbox,
    content:
      "Enjoy trade execution management, decision assistance, and real-time market data, all integrated into your trading platform​.",
  },
];
export const WebTrader = () => {
  return (
    <section className="web-trader">
      {data.map(({ title, content, icon }, index) => {
        return (
          <div key={index} className="web-trader-item">
            <img src={icon} alt="web trader" />
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        );
      })}
    </section>
  );
};
