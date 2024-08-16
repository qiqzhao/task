import logo from "../../../assets/logo.svg";
import "./index.css";

export const Logo = () => {
  return (
    <header className="header">
      <div>
        <div className="header-menu">
          <span>CONTACT</span>
          <span>PORTAL</span>
          <span>LOGIN</span>
          <span>IB PORTAL</span>
          <span>AFFILIATE PORTAL</span>
          <span>ENGLISH</span>
        </div>
      </div>
      <img src={logo} alt="fpmarkets logo" />
    </header>
  );
};
