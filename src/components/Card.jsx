import React from "react";

export default function Card({ text, title, icon }) {
  return (
    <div className="flex flex-col gap-2 justify-between bg-white m-6 p-6 rounded-lg lg:h-[20.125rem]">
      <img src={icon} className="absolute mt-[-3rem]" />
      <h1 className="text-dark-blue text-xl lg:text-2xl font-extrabold mt-6">
        {title}
      </h1>
      <p className="text-base lg:text-lg text-gray leading-[1.625rem] lg:leading-7 mb-4">
        {text}
      </p>
      <a className="text-deep-pink text-lg leading-7 font-bold">Get Started</a>
    </div>
  );
}
