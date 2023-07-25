import React from "react";

const ItemCustomer = ({ item, index }) => {
  return (
    <div
      key={index}
      className="w-[400px] h-[230px] rounded-[10px] p-[30px] border-[2px] bg-color4 gap-[50px] hover:border-color3 duration-150 hover:cursor-pointer  hover: shadow-xl-color3 hover:shadow-2xl hover:shadow-black-500"
    >
      <div className="flex justify-between">
        <div className="flex justify-between items-center gap-5">
          <img
            src={`./cus${index + 1}.png`}
            className="c1 w-[50px] h-[50px]"
            alt="Customer Image"
          ></img>
          <div className="flex flex-col text-left">
            <h3 className="cus-name w-[150px] h-[18px] text-color1 text-[18px] font-medium">
              {item.name}
            </h3>
            <p className="cus-add text-color2 text-left text-[14px] font-normal mt-[5px]">
              {item.add}
            </p>
          </div>
        </div>
        <div className="flex justify-between text-center gap-[10px] items-center">
          <p className="point text-color1 text-[16px] font-normal text-center">
            {item.point}
          </p>
          <img
            src="./star.png "
            className="star w-[16px] h-[16px]"
            alt="Star"
          ></img>
        </div>
      </div>
      <p className=" mt-5 w-[340px] h-[100px] text-color1 font-normal">
        {item.cmt}
      </p>
    </div>
  );
};
export default ItemCustomer;
