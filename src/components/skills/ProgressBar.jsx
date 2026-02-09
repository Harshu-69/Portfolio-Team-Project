import React from "react";

const ProgressBar = ({ data }) => {
  return (
    <div className="flex flex-col mb-5 gap-1">
      <div className="flex  justify-between">
        <div className="text-md font-normal  "> {data.lang} </div>
        <div className="text-xs tracking-wide uppercase">{data.percent} %</div>
      </div>
      <div className="w-full h-[0.450rem] rounded-full bg-zinc-700 ">
        <div className=" w-[95%] h-full rounded-full bg-linear-to-r from-[#f0765d] via-[#72af9f] to-[#4fe6e6] "></div>
      </div>
    </div>
  );
};

export default ProgressBar;
