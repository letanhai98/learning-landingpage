import React from "react";

const ItemPlan = ({ item, index }) => {
  return (
    <div
      key={index}
      className="w-[330px] h-[770px] rounded-[10px] bg-color4 flex flex-col items-center border-[2px] hover:border-color3 duration-200 hover:cursor-pointer max-lg:w-[50%] "
    >
      <div className=" pt-20 flex flex-col items-center gap-[30px]">
        <img src="./luckybox.svg" alt="Box"></img>
        <span className="name-box text-color1 items-center text-[18px] font-medium">
          {item.name}
        </span>
      </div>
      <div className=" mt-[30px] flex flex-col justify-start gap-5">
        {item.list.map((list, indexlist) => {
          return (
            <ul key={indexlist} className="flex items-center gap-5">
              <img src="./check.svg" alt="Tick check"></img>
              <li className="plan-content text-color2 text-[14px] font-normal ">
                {list}
              </li>
            </ul>
          );
        })}
      </div>
      <div className=" mb-[50px] flex flex-col gap-5 items-center justify-end h-full">
        <p className="price text-color1 items-center text-[25px] font-medium ">
          {item.price === "Free" ? null : "$"}
          {item.price}
          <span className="mo-price text-color2 font-normal">
            {item.price === "Free" ? null : " / mo"}
          </span>
        </p>
        <a
          href="#"
          className=" font-medium signup text-[#f53855] py-[13px] px-[63px] rounded-[50px] border-[2px] border-[#f53855] hover:bg-[#f53855] duration-200 hover:text-[#fff] hover:shadow-lg"
        >
          Select
        </a>
      </div>
    </div>
  );
};

export default ItemPlan;
