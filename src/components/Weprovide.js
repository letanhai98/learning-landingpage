function Weprovide() {
  const itemList = [
    "Powerfull online protection.",
    "Internet without borders.",
    "Supercharged VPN.",
    "No specific time limits.",
  ];
  return (
    <div className="flex justify-center items-center pb-[130px] w-[1440px] max-lg:w-[100%] max-lg:flex max-lg:flex-col lg:justify-center max-lg:items-center">
      <div className="flex justify-between items-center gap-[170px] w-[1140px] max-lg:w-[100%] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
        <img
          src="./feature.png"
          className="feature-img"
          alt="Feature Image"
        ></img>
        <div className="flex flex-col gap-5 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center ">
          <div className=" mb-5 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
            <h2 className="w-[380px] text-color1 text-[35px] font-medium mb-5 r ">
              We Provide Many Features You Can Use
            </h2>
            <p className=" text-color2 font-normal text-[16px]">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
          </div>
          <div className="flex flex-col">
            <ul className=" gap-[15px] flex flex-col">
              {itemList.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-self-start gap-[10px] items-center"
                  >
                    <img
                      src="./tickbox.svg"
                      className="check"
                      alt="Tick Check"
                    ></img>
                    <p className="item-title">{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Weprovide;
