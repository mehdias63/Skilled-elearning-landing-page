import React from "react";

export default function Card({ text, title, icon }) {
  return (
    <div>
      <img src={icon} />
      <h1>{title}</h1>
      <p>{text}</p>
      <a className="text-deep-pink">Get Started</a>
    </div>
  );
}
