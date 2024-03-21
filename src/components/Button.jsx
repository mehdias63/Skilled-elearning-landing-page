import React from "react";

export default function Button({ className }) {
  return (
    <button
      className={`${className} px-7 py-4 text-white rounded-full text-base lg:text-lg font-bold leading-7 cursor-pointer`}
    >
      Get Started
    </button>
  );
}
