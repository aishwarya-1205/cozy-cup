import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2 ">
      <div className="lg:border-3 border-2 hover:border-[#C3732A] hover:text-[#C3732A] lg:h-44 flex items-center px-1 pt-1 lg:px-14 border-white rounded-full uppercase">
        <Link className="text-[5vw] lg:mt-6" to="/dine-in">
          Dine-in
        </Link>
      </div>
      <div className="lg:border-3 border-2 hover:border-[#C3732A] hover:text-[#C3732A]  lg:h-44 flex items-center px-1 pt-1 lg:px-14 border-white rounded-full uppercase">
        <Link className="text-[5vw] lg:mt-6" to="/takeout">
          Takeout
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
