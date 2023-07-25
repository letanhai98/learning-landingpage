function Hero() {
  return (
    <div className=" flex justify-center items-center w-[1440px] mb-[90px] flex-col max-lg:w-[100%] max-lg:flex max-lg:flex-col lg:justify-center max-lg:items-center">
      <div className=" flex justify-center mb-[100px] w-[1140px] max-lg:w-[100%] max-lg:flex max-lg:flex-col lg:justify-center max-lg:items-center">
        <div className=" pt-20 flex justify-between items-center gap-[30px] max-lg:w-[100%] max-lg:flex max-lg:flex-col lg:justify-center max-lg:items-center">
          <div className="flex flex-col order-1 max-lg:items-center max-lg:order-2">
            <h1 className="w-[555px] text-[#0b132a] text-[50px] font-medium mb-[40px]">
              Want anything to be easy with{" "}
              <span className="title-las font-bold">LaslesVPN.</span>
            </h1>
            <p className="title-content">
              Provide a network for all your needs with ease and fun using
              <span className="content-las font-medium "> LaslesVPN</span>{" "}
              discover interesting features from us.
            </p>
            <a
              href="#"
              className=" text-decoration-none text-[#fff] text-[16px] font-bold rounded-[10px] px-[]75.5] py[17.5px] bg-[#f53835] w-[250px] h-[60px] items-center flex justify-center mt-[50px] hover:text-color3 hover:bg-color5 duration-500 hover:shadow-2xl hover:shadow-red-500 "
            >
              Get Started
            </a>
          </div>
          <img
            src="./dev.png"
            className="content-img order-2 max-lg:order-1"
            alt="Content image"
          ></img>
        </div>
      </div>
      <div className="flex items-center justify-between rounded-[10px] bg-[#f8f8f8] shadow-2xl w-[1140px] h-[200px] max-lg:w-[50%] max-lg:flex max-lg:items-center">
        <div className="flex justify-center items-center gap-[36px] w-[100%] max-lg:w-[100%] max-lg:flex-col max-lg:items-center">
          <img
            src="./user.png"
            className="item-img w-[55px] h-[55px]"
            alt="User"
          ></img>
          <div className="item-title ">
            <span className="item-num text-color1 text-[25px] font-bold max-lg:flex max-lg:items-center max-lg:justify-center">
              90+
            </span>
            <p className="item-content text-color2 text-[20px] font-normal">
              Users
            </p>
          </div>
        </div>
        <div className="l bg-[#EEEFF2] w-[8px] h-[120px] max-lg:bg-[#f8f8f8]"></div>
        <div className="flex justify-center items-center gap-[36px] w-[100%] max-lg:w-[100%] max-lg:flex-col max-lg:flex max-lg:items-center max-lg:justify-center ">
          <img src="./location.png" className="item-img" alt="Location"></img>
          <div className="item-title">
            <span className="item-num item-num text-color1 text-[25px] font-bold max-lg:flex max-lg:items-center max-lg:justify-center">
              30+
            </span>
            <p className="item-content item-content text-color2 text-[20px] font-normal">
              Locations
            </p>
          </div>
        </div>
        <div className="l bg-[#EEEFF2] w-[8px] h-[120px] max-lg:bg-[#f8f8f8]"></div>
        <div className="flex justify-center items-center gap-[36px] w-[100%] max-lg:w-[100%] max-lg:flex-col">
          <img src="./Server.png" className="item-img" alt="Server"></img>
          <div className="item-title">
            <span className="item-num item-num text-color1 text-[25px] font-bold max-lg:flex max-lg:items-center max-lg:justify-center">
              50+
            </span>
            <p className="item-content item-content text-color2 text-[20px] font-normal">
              Servers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
