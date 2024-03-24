import React from "react";

export default function Button({ className }) {
  return (
    <button
      className={`${className} px-6 py-2 lg:px-8 lg:py-3 text-white rounded-full text-base lg:text-lg font-bold leading-7 cursor-pointer`}
    >
      Get Started
    </button>
  );
}
