import React from "react";

const Spinner = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-16 h-16 border-t-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
