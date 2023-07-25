function Header() {
  const listMenu = [
    { name: "About", link: "" },
    { name: "Features", link: "" },
    { name: "Pricing", link: "" },
    { name: "Testimonials", link: "" },
    { name: "Help", link: "" },
  ];
  return (
    <header className=" flex justify-center items-center w-[1440px] xl:w-[100%] max-lg:w-[100%]">
      <div className=" pt-[50px] flex justify-between gap-[150px] w-[1140px] xl:flex xl:items-center xl:gap-[20px] max-lg:w-[100%] max-lg:flex max-lg:items-center max-lg:gap-5 ">
        <div className=" flex flex-row gap-[10px] items-center">
          <img src="./Logo.svg" className="icon-img" alt="Logo"></img>
          <p className=" text-[#0b132a] text-[20px] font-medium cursor-pointer">
            Lasles<span className=" font-bold">VPN</span>
          </p>
        </div>
        <div className="flex justify-center items-center gap-10 max-lg:w-[100%] max-lg:hidden">
          {listMenu.map((item, index) => {
            return (
              <ul key={index} className="menu-item list-none">
                <li>
                  <a
                    href={item.link}
                    className="link-item text-[#4f5665] text-[16px] font-normal"
                  >
                    {item.name}
                  </a>
                </li>
              </ul>
            );
          })}
        </div>
        <div className=" lg:hidden">
          <a
            href="#"
            className="img-menu font-medium signup text-[#f53855] py-[13px] px-[45px] rounded-full border border-[#f53855] hover:bg-[#f53855] duration-500 hover:text-[#fff] 
             "
          >
            Menu
          </a>
        </div>
        <div className="flex justify-center items-center gap-[30px]">
          <a href="#" className="text-[#0b132a] text-[16px] font-medium">
            Sign In
          </a>
          <a
            href="#"
            className=" w-[151px] h-[45px] text-center items-center signup text-[#f53855] py-[10px] px-[45px] rounded-full border border-[#f53855] hover:bg-[#f53855] duration-500 hover:text-[#fff] text-[16px] font-medium"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header;
