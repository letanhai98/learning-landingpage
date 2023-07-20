function Header() {
  const listMenu = [
    { name: "About", link: "" },
    { name: "Features", link: "" },
    { name: "Pricing", link: "" },
    { name: "Testimonials", link: "" },
    { name: "Help", link: "" },
  ];
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-icon">
          <img src="./Logo.svg" className="icon-img" alt="Logo"></img>
          <p className="icon-title">
            Lasles<span className="vpn">VPN</span>
          </p>
        </div>
        <div className="header-menu">
          {listMenu.map((item, index) => {
            return (
              <ul key={index} className="menu-item">
                <li>
                  <a href={item.link} className="link-item">
                    {item.name}
                  </a>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="header-user">
          <a href="#" className="signin">
            Sign In
          </a>
          <a href="#" className="signup">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
export default Header;
