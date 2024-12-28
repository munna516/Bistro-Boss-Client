import React from "react";

const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center mt-20 mb-10">
      <p className="text-yellow-600 mb-3">---{subheading}---</p>
      <h1 className="text-4xl border-y-4 py-5 uppercase">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
