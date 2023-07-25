import React from "react";
import ItemFooter from "./ItemFooter";
function Footer() {
  const listConTact = [
    {
      title: "Product",
      link: [
        { name: "Download", url: "download.com" },
        { name: "Pricing", url: "" },
        { name: "Locations", url: "" },
        { name: "Server", url: "" },
        { name: "Countries", url: "" },
        { name: "Blog", url: "" },
      ],
    },
    {
      title: "Engage",
      link: [
        { name: "LaslesVPN ? ", url: "download.com" },
        { name: "FAQ", url: "" },
        { name: "Tutorials", url: "" },
        { name: "About Us", url: "" },
        { name: "Privacy Policy", url: "" },
        { name: "Terms of Service", url: "" },
      ],
    },
    {
      title: "Earn Money",
      link: [
        { name: "Affiliate", url: "download.com" },
        { name: "Become Partner", url: "" },
      ],
    },
  ];
  return (
    <div className="w[100%] flex justify-center items-center pb-[100px] max-lg:flex max-lg:items-center max-lg:justify-center">
      <div className="flex flex-col justify-center items-center max-lg:w-[100%] max-lg:flex max-lg:items-center max-lg:justify-center">
        <div className="w-[1140px] h-[233px] flex justify-between items-center bg-color4 rounded-[10px] shadow-xl mb-[67px] mt-[-130px] max-lg:w-[100%] max-lg:h-[70%] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:p-[20px] max-lg:justify-center ">
          <div className="flex flex-col gap-5  mx-[70px] my-[50px] justify-center max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
            <h2 className="footer-header w-[371px] h-[80px] text-color1 text-[35px] font-medium max-lg:ml-12 max-lg:text-center">
              Subscribe Now for Get Special Features!
            </h2>
            <p className="footer-title w-[410px] h-[16px] text-color2 text-16px font-normal mt-5 max-lg:flex max-lg:flex-col  max-lg:text-center max-lg:ml-[40px]">
              Let's subscribe with us and find the fun.
            </p>
          </div>
          <a
            href="#"
            className=" mr-[70px] px-[65px] py-[17.5px] bg-color3 rounded-[10px] text-[16px] font-bold text-color5 hover:bg-color7  duration-500 hover:text-color3 max-lg:ml-[80px] max-lg:items-center max-lg:text-center hover:shadow-2xl hover:shadow-red-500"
          >
            Subscribe Now
          </a>
        </div>
        <div className="flex justify-between gap-[230px] w-[1140px] max-lg:w-[100%] max-lg:flex max-lg:justify-center max-lg:flex-col  max-lg:items-center max-lg:gap-[50px]">
          <div className="flex flex-col justify-start max-lg:flex max-lg:flex-col max-lg:items-center">
            <div className="flex flex-row items-center gap-[10px] cursor-pointer">
              <img src="./Logo.svg" className="icon-img" alt="Logo"></img>
              <p className="icon-title text-color1 text-5 font-medium">
                Lasles<span className="vpn font-bold">VPN</span>
              </p>
            </div>
            <span className=" my-[25px] w-[340px] h-[61px] text-[16px] font-normal text-color2">
              <span className="contact-las font-medium">LaslesVPN</span> is a
              private virtual network that has unique features and has high
              security.
            </span>
            <div className="flex flex-row justify-start cursor-pointer">
              <img src="./Facebook.svg" alt="Facebook"></img>
              <img src="./Twitter.svg" alt="Twitter"></img>
              <img src="./Instagram.svg" alt="Instagram"></img>
            </div>
            <p className="copyright text-color2 text-left text-[16px] font-normal">
              ©2020Lasles<span className="footer-vpn font-medium">VPN</span>
            </p>
          </div>
          <div className="flex justify-between items-center gap-[125px] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:gap-[30px]">
            {listConTact.map((item, index) => {
              return <ItemFooter item={item} index={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
