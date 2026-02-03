import "../pages/DocsPage.css";

export default function StepImage({ src, alt, caption, size = "md" }) {
  return (
    <figure className={`qsFigure is${size[0].toUpperCase()}${size.slice(1)}`}>
      <img className="qsImage" src={src} alt={alt} loading="lazy" />
      {caption ? <figcaption className="qsCaption">{caption}</figcaption> : null}
    </figure>
  );
}