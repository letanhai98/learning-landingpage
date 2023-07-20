function Section6() {
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
    <div className="footer">
      <div className="footer-container">
        <div className="footer-sub">
          <div className="footer-content">
            <h2 className="footer-header">
              Subscribe Now for Get Special Features!
            </h2>
            <p className="footer-title">
              Let's subscribe with us and find the fun.
            </p>
          </div>
          <a href="#" className="sub-submit">
            Subscribe Now
          </a>
        </div>
        <div className="footer-contact">
          <div className="contact-se">
            <div className="header-icon">
              <img src="./Logo.svg" className="icon-img" alt="Logo"></img>
              <p className="icon-title">
                Lasles<span className="vpn">VPN</span>
              </p>
            </div>
            <span className="contact-title">
              <span className="contact-las">LaslesVPN</span> is a private
              virtual network that has unique features and has high security.
            </span>
            <div className="logo-contact">
              <img src="./Facebook.svg" alt="Facebook"></img>
              <img src="./Twitter.svg" alt="Twitter"></img>
              <img src="./Instagram.svg" alt="Instagram"></img>
            </div>
            <p className="copyright">
              ©2020Lasles<span className="footer-vpn">VPN</span>
            </p>
          </div>
          <div className="box-about">
            {listConTact.map((item, index) => {
              return (
                <div key={index} className="about-list">
                  <h3 className="about-title">{item.title}</h3>
                  <ul className="about-item">
                    {item.link.map((link, nlink) => {
                      return (
                        <li key={nlink} className="link-about">
                          <a href={link.url} className="links"></a>
                          {link.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section6;
