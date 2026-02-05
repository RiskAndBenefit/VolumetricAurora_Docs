import "../pages/DocsPage.css";

export default function AlignedStepImage({ src, alt, caption, size = "md", spacer = '0' }) {
  const imgStyle = spacer !== '0' ? { marginBottom: spacer } : {};

  return (
    <figure className={`qsFigure is${size[0].toUpperCase()}${size.slice(1)}`}>
      <img className="qsImage" src={src} alt={alt} loading="lazy" style={imgStyle} />
      {caption ? <figcaption className="qsCaption">{caption}</figcaption> : null}
    </figure>
  );
}
