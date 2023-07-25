function Network() {
  return (
    <div className="  mb-[30px] flex justify-center items-center flex-col max-lg:w-[100%] max-lg:flex max-lg:flex-col lg:justify-center max-lg:items-center">
      <div className=" flex justify-center flex-col items-center">
        <div className="flex flex-col justify-center items-center gap-5 pb-[150px]">
          <h2 className="network-header w-[380px] text-color1 text-[35px] text-center font-medium">
            Huge Global Network of Fast VPN
          </h2>
          <p className="network-title text-center w-[555px] text-color2 text-[16px] font-normal">
            See <span className="network-las font-medium">LaslesVPN</span>{" "}
            everywhere to make it easier for you when you move locations.
          </p>
        </div>
        <img
          src="./network.svg"
          alt="Map"
          className=" items-center flex max-lg:w-[100%] max-lg:flex max-lg:items-center"
        ></img>
      </div>
    </div>
  );
}
export default Network;
