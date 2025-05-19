import type { FC } from "react";


const Fuel:FC = () => {
  return (
    <form className="flex flex-col">
      <label> Yakıt:</label>

      <input type="number"
        className="w-24 py-[6px] px-2 rounded-[4px] shadow text-black bg-white"
        placeholder="örn:2023"
       />
    </form>
  )
};

export default Fuel;
