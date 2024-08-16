import "./index.css";

export const Icon = ({ url, src, alt }: any) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <img className="contact-icon" src={src} alt={alt} />
    </a>
  );
};
