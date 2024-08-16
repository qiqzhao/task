import "./index.css";
import TrustPilot from "../../assets/trustpilot.svg";

export const TradeTrust = () => {
  return (
    <section className="trade-trust">
      <h1 className="trade-trust-title">
        Trade with <br /> a Trusted <br /> Global Broker
      </h1>
      <img src={TrustPilot} alt="trustpilot" />
      <form className="trade-trust-form">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Email" />
        <input type="number" placeholder="Phone" />
        <button>Register Now</button>
      </form>
      <div className="trade-trust-overlay"></div>
    </section>
  );
};
