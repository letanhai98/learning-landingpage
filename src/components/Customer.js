import React from "react";
import ItemCustomer from "./ItemCustomer";
function Customer() {
  const listReport = [
    {
      avt: "",
      name: "Viezh Robert",
      add: "Warsaw, Poland",
      point: 4.5,
      cmt: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    },
    {
      avt: "",
      name: "Yessica Christy",
      add: "Shanxi, China",
      point: 4.5,
      cmt: "“I like it because I like to travel far and still can connect with high speed.”.",
    },
    {
      avt: "",
      name: "Kim Young Jou",
      add: "Seoul, South Korea",
      point: 4.5,
      cmt: "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
    },
  ];
  return (
    <div className=" pt-[50px] pb-[180px] flex items-center justify-center flex-col w-[1440px] max-lg:w-[100%] max-lg:flex max-lg:flex-col lg:justify-center max-lg:items-center ">
      <div className="flex flex-col justify-center items-center max-lg:w-[100%] max-lg:flex max-lg:flex-col lg:justify-center max-lg:items-center ">
        <div className="flex justify-between items-center gap-[47px] mb-[47px] w-[1140px] max-lg:w-[100%] max-lg:flex max-lg:flex-col max-lg:items-center ">
          <img
            src="./netflix.png"
            className="partner-img"
            alt="Partner Image"
          ></img>
          <img
            src="./reddit.png"
            className="partner-img"
            alt="Partner Image"
          ></img>
          <img
            src="./amazon.png"
            className="partner-img"
            alt="Partner Image"
          ></img>
          <img
            src="./discord.png"
            className="partner-img"
            alt="Partner Image"
          ></img>
          <img
            src="./spotify.png"
            className="partner-img"
            alt="Partner Image"
          ></img>
        </div>
        <div className="flex justify-center mb-[60px] max-lg:w-[100%] max-lg:flex max-lg:flex-col lg:justify-center max-lg:items-center">
          <div className="flex flex-col items-center gap-5">
            <h2 className="cus-title w-[447px] text-color1 text-[35px] text-center font-medium">
              Trusted by Thousands of Happy Customer
            </h2>
            <p className="cus-content w-[555px] text-color2 text-[16px] font-normal text-center">
              These are the stories of our customers who have joined us with
              great pleasure when using this crazy feature.
            </p>
          </div>
        </div>
        <div className=" w-[1140px] flex justify-between items-center gap-[50px] max-lg:w-[100%] max-lg:flex max-lg:flex-col max-lg:items-center">
          {listReport.map((item, index) => {
            return <ItemCustomer item={item} index={index} />;
          })}
        </div>
        <div className="pt-[80px] w-[1140px] flex justify-between items-center max-lg:w-[50%] max-lg:flex max-lg:items-center  max-lg:justify-between">
          <ul className="list-bar flex justify-start items-center gap-[15px] w-[135px] h-[15px]">
            <li className="toch-bar1 bg-color3 h-[15px] w-[50px] rounded-[50px] cursor-pointer hover:shadow-2xl hover:shadow-red-500"></li>
            <li className="toch-bar h-[15px] w-[15px] rounded-[100%] bg-color7 cursor-pointer"></li>
            <li className="toch-bar toch-bar h-[15px] w-[15px] rounded-[100%] bg-color7 cursor-pointer"></li>
            <li className="toch-bar toch-bar h-[15px] w-[15px] rounded-[100%] bg-color7 cursor-pointer"></li>
          </ul>
          <div className="next-back w-[60px] h-[60px] flex justify-between gap-[15px] items-center">
            <img
              src="./back.svg"
              className="but-back w-[45px] h-[45px] rounded-[100%] border-[2px] border-color3 cursor-pointer hover:shadow-2xl hover:shadow-red-500"
              alt=""
            ></img>
            <img
              src="./next.svg"
              className="but-next but-back w-[45px] h-[45px] rounded-[100%] border-[2px] border-color3 bg-color3 cursor-pointer hover:shadow-2xl hover:shadow-red-500"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Customer;
