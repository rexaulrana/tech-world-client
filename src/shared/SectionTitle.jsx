// import { Children } from "react";

const SectionTitle = ({ title1 }) => {
  return (
    <div className="flex justify-center items-center gap-1 mt-8 mb-5">
      <h1 className="text-5xl font-medium text-[#0e588d]">{title1}</h1>

      <h1 className="text-7xl text-[#172840]">-</h1>
    </div>
  );
};

export default SectionTitle;
