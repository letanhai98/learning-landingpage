import React from "react";
import ItemPlam from "./ItemPlan";
function Plan() {
  const listPlan = [
    {
      name: "Free Plan",
      list: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      price: "Free",
    },
    {
      name: "Standard Plan",
      list: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
      ],
      price: "9",
    },
    {
      name: "Premium Plan",
      list: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
        "Get New Features",
      ],
      price: "12",
    },
  ];
  return (
    <div className=" mb-[150px] flex justify-center items-center">
      <div className="flex flex-col gap-[60px] w-[1140px] max-lg:w-[100%] max-lg:flex max-lg:flex-col lg:justify-center max-lg:items-center">
        <div className=" pt-20 flex flex-col justify-center items-center gap-5">
          <h2 className="plan-header w-[380px] text-center text-[35px] font-medium text-color1">
            Choose Your Plan
          </h2>
          <p className="w-[555px] text-color2 text-center text-[16px] font-normal">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
        </div>
        <div className="flex justify-between items-center gap-[50px] max-lg:w-[100%] max-lg:flex max-lg:flex-col max-lg:items-center ">
          {listPlan.map((item, index) => {
            return <ItemPlam item={item} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default Plan;
