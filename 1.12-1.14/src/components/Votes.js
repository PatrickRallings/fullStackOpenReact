import React from "react";

export default function Votes({ text, value }) {
  return (
    <>
      <h2 className="mt-4">
        {text}
        {value}
      </h2>
      <hr className="ml-5 mr-5" />
    </>
  );
}