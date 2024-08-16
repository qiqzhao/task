import "./index.css";
import FootLogo from "../../assets/footer-logo.svg";
import FBIcon from "../../assets/FB-icon.svg";
import TwitterIcon from "../../assets/twitter-icon.svg";
import IGIcon from "../../assets/IG-icon.svg";
import LikedinIcon from "../../assets/LNK-icon.svg";
import YoutobeIcon from "../../assets/Youtube-icon.svg";
import { Icon } from "./icon";
import { ContactItem } from "./contact-item";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img className="foot-log-img" src={FootLogo} alt="footer logo" />
        <div className="contact">
          <ContactItem
            className="call"
            label="Call us:"
            value="+44 28 2544 7780"
          />
          <ContactItem
            className="email"
            label="Email:"
            value="partners@fpmarkets.com"
          />
          <ContactItem
            className="social"
            label="Social media:"
            value="partners@fpmarkets.com"
          >
            <span className="contact-social">
              <Icon url="." src={FBIcon} alt="facebook" />
              <Icon url="." src={TwitterIcon} alt="twitter" />
              <Icon url="." src={IGIcon} alt="ig" />
              <Icon url="." src={LikedinIcon} alt="linkedin" />
              <Icon url="." src={YoutobeIcon} alt="youtube" />
            </span>
          </ContactItem>
        </div>
      </div>

      <div className="site-container">
        <div className="site">
          <span className="sitemap">Sitemap</span>
          <span>© FP Markets 2018</span>
        </div>
        <div className="selector">
          <select>
            <option value="ASIC">ASIC</option>
            <option value="option1">option1</option>
            <option value="option2">option2</option>
          </select>
        </div>
      </div>

      <p className="declare">
        DISCLAIMER: Trade Responsibly: Derivative products are highly leveraged,
        carry a high level of risk and are not suitable for all investors.
        Features of our products including fees and charges are outlined in the
        relevant legal documents available on our website. The legal documents
        should be considered before entering into transactions with us. FP
        Markets is a group of companies which include First Prudential Markets
        Pty Ltd, an ASIC regulated provider of Derivatives and Forex trading
        services (ABN 16 112 600 281, AFS License No. 286354), First Prudential
        Markets Ltd (registration number HE 372179), a company authorised and
        regulated by the Cyprus Securities and Exchange Commission (CySEC
        License number 371/18) and FP Markets LLC. which is a registered company
        of St. Vincent and the Grenadines, Limited Liability Number 126 LLC
        2019. FP Markets does not accept applications from residents of
        countries or jurisdictions where such distribution or use would be
        contrary to local laws or regulations.
      </p>
    </footer>
  );
};
