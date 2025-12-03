import React from "react";

const RightPanel: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 md:p-8 mt-5 text-center ">
      <h1 className="text-2xl md:text-4xl tracking-tight font-bold text-[#4aa6a4] mb-2">
        group<span className="text-white">ups</span>
      </h1>
      <p className="text-[#6c6c6c] text-sm  text-center lg:text-left ">
        You're about to use the GroupUps chatbot.
      </p>
      <p className="text-[#6c6c6c] text-sm text-center lg:text-left mb-24 ">
        Once you finish, products matching your needs will display here
      </p>
    </div>
  );
};
export default RightPanel;
