function Header() {
  const listMenu = [
    { name: "About", link: "" },
    { name: "Features", link: "" },
    { name: "Pricing", link: "" },
    { name: "Testimonials", link: "" },
    { name: "Help", link: "" },
  ];
  return (
    <header className="container header">
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
        <div className="header-icon-menu">
          <a href="#" className="img-menu">
            Menu
          </a>
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
    </header>
  );
}
export default Header;
