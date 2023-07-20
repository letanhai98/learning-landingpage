function Section1() {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-content">
          <div className="main-heading">
            <h1 className="main-title">
              Want anything to be easy with{" "}
              <span className="title-las">LaslesVPN.</span>
            </h1>
            <p className="title-content">
              Provide a network for all your needs with ease and fun using
              <span className="content-las"> LaslesVPN</span> discover
              interesting features from us.
            </p>
            <a href="#" className="main-buttom">
              Get Started
            </a>
          </div>
          <img
            src="./dev.png"
            className="content-img"
            alt="Content image"
          ></img>
        </div>
      </div>
      <div className="main-intro">
        <div className="intro-item">
          <img src="./user.png" className="item-img" alt="User"></img>
          <div className="item-title">
            <span className="item-num">90+</span>
            <p className="item-content">Users</p>
          </div>
        </div>
        <div className="l"></div>
        <div className="intro-item">
          <img src="./location.png" className="item-img" alt="Location"></img>
          <div className="item-title">
            <span className="item-num">30+</span>
            <p className="item-content">Locations</p>
          </div>
        </div>
        <div className="l"></div>
        <div className="intro-item">
          <img src="./Server.png" className="item-img" alt="Server"></img>
          <div className="item-title">
            <span className="item-num">50+</span>
            <p className="item-content">Servers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section1;
