import {createElement} from "react";

export default function IconBox({iconSvg, text, link}) {
  console.log(iconSvg)
  return (
    <a className="icon-box" href={link} target="_blank" rel="noreferrer">
      {createElement(iconSvg, { width: 200, height: 200, color: 'currentColor' })}
      <p>{text}</p>
    </a>
  );
}