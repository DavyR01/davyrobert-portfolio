import React from "react";

const numbers1 = ["0", "0", "1", "0", "1", "1", "0", "0", "0", "1", "1", "0", "0", "0", "1", "1", "0", "0", "0", "1", "1", "0", "0", "0", "1"];
const numbers2 = ["0", "0", "0", "0", "1", "1", "1", "0", "0", "1", "1", "0", "0", "0", "1", "1", "0", "0", "1", "1", "1", "0", "0", "0", "1"];
const numbers3 = ["1", "0", "1", "0", "1", "1", "0", "1", "0", "1", "0", "0", "0", "0", "1", "1", "0", "0", "0", "1", "1", "1", "0", "0", "1"];
const numbers4 = ["1", "0", "1", "0", "1", "1", "0", "1", "0", "1", "0", "0", "0", "0", "1", "1", "0", "0", "0", "1", "1", "1", "0", "0", "1"];

const Numbers = () => {
  const renderColumn = (numbers: string[], animation: string, position: string, textSize: string) => (
    <div className={`absolute top-0 ${position} h-screen overflow-hidden z-0`}>
      <div className={`flex flex-col ${animation}`}>
        {[...numbers, ...numbers].map((num, i) => (
          <div
            key={i}
            className={`text-green-300 font-extrabold ${textSize} opacity-25 my-[1px]`}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {renderColumn(numbers4, "animate-scroll-down-medium", "right-[20%]", "text-sm")}
      {renderColumn(numbers1, "animate-scroll-down-fast", "right-[40%]", "text-sm")}
      {renderColumn(numbers2, "animate-scroll-down-medium", "right-[60%]", "text-xs")}
      {renderColumn(numbers3, "animate-scroll-down-fast", "right-[80%]", "text-sm")}
    </div>
  );
};

export default Numbers;
