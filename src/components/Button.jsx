import React from "react";

export default function Button({ className }) {
  return (
    <button className={`${className} px-7 py-3 text-white rounded-full`}>
      Get Started
    </button>
  );
}
