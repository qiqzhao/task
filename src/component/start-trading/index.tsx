import "./index.css";
import Trustpilot from '../../assets/trustpilot.svg'

export const StartTrading = () => {
  return (
    <section className="start-trading">
      <h1 className="start-trading-title">Start Trading in minutes</h1>
      <form className="start-trading-form">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="number" placeholder="Phone" />
        <input type="text" placeholder="Email" />
        <button>Register Now</button>
      </form>
      <p className="start-trading-privacy">By supplying your email you agree to FP Markets <a href="." target="__blank">privacy policy</a> and receive future marketing materials from FP Markets. You can unsubscribe at any time.</p>
      <img src={Trustpilot} alt="trust polit" />
    </section>
  );
};
