import React, { useRef } from "react";

const AvoidReRender = () => {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Avoid Re-Renders</h2>
      <p className="text-center">Render Count: {renderCount.current}</p>
    </div>
  );
};

export default AvoidReRender;
