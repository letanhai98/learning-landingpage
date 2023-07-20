function Footer() {
  const listTitle = [
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
      <div className="footer-sub">
        <div className="footer-sub-content">
          <div className="footer-heading">
            Subscribe Now for Get Special Features!
          </div>
          <p className="footer-title">
            Let's subscribe with us and find the fun.
          </p>
        </div>
        <a href="#" className="footer-btn-sub">
          Subscribe Now
        </a>
      </div>
      <div className="footer-info">
        <div className="footer-info1">
          <div className="footer-info-title">
            <div className="footer-icon">
              <img src="./Logo.png" className="footer-icon-img"></img>
              <p className="footer-icon-content">
                LaslesVPN
                <span className="footer-las">
                  {" "}
                  is a private virtual network that has unique features and has
                  high security.
                </span>
              </p>
            </div>
            <div className="footer-contact">
              <img src="./Facebook.svg"></img>
              <img src="./Twitter.svg"></img>
              <img src="./Instagram.svg"></img>
            </div>
            <p className="copyright">
              ©2020Lasles<span className="footer-vpn">VPN</span>
            </p>
          </div>
        </div>
        <div className="footer-info2">
          {listTitle.map((item, index) => {
            return (
              <div key={index} className="footer-collumn">
                <h3 className="footer-collumn-title">{item.title}</h3>
                <ul class="footer-links">
                  {item.link.map((link, ilink) => {
                    return (
                      <li key={ilink} class="footer-item">
                        <a href={link.url} class="footer-link">
                          {link.name}
                        </a>
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
  );
}
export default Footer;
