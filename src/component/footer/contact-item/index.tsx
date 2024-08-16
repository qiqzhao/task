import "./index.css";

export const ContactItem = ({ label, value, children }: any) => {
  return (
    <div className="contact-item">
      <span className="contact-label">{label}</span>
      {!!children ? children : <span className="contact-value">{value}</span>}
    </div>
  );
};
