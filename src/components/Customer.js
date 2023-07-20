function Customer() {
  const listItem = [
    {
      info: {
        avt: "",
        namecus: "Viezh Robert",
        address: "Warsaw, Poland",
        point: 4.5,
        star: "",
      },
      comment:
        "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    },
    {
      info: {
        avt: "",
        namecus: "Yessica Christy",
        address: "Shanxi, China",
        point: 4.5,
        star: "",
      },
      comment:
        "“I like it because I like to travel far and still can connect with high speed.”",
    },
    {
      info: {
        avt: "",
        namecus: "Kim Young Jou",
        address: "Seoul, South Korea",
        point: 4.5,
        star: "",
      },
      comment:
        "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
    },
  ];
  return (
    <div className="hero-customer">
      <div className="customer">
        <div className="customer-partner">
          <img src="./netflix.png" className="netflix-img" alt="loading"></img>
          <img src="./reddit.png" className="netflix-img" alt="loading"></img>
          <img src="./amazon.png" className="netflix-img" alt="loading"></img>
          <img src="./discord.png" className="netflix-img" alt="loading"></img>
          <img src="./spotify.png" className="netflix-img" alt="loading"></img>
        </div>
        <div className="customer-header">
          <h2 className="customer-heading">
            Trusted by Thousands of Happy Customer
          </h2>
          <p className="customer-title">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
        </div>
        <div className="customer-list">
          {listItem.map((item, index) => {
            return (
              <div key={index} className="customer-item">
                <div className="customer-info">
                  <div className="cus-in4">
                    <img
                      alt="loading"
                      src={`./cus${index + 1}.png`}
                      className="cus-img "
                    ></img>
                    <div className="cus-imfo">
                      <h3 className="cus-name">{item.info.namecus}</h3>
                      <h4 className="cus-add">{item.info.address}</h4>
                    </div>
                  </div>
                  <div className="cus-rate">
                    <p className="cus-point">{item.info.point}</p>
                    <img src="star.png" className="cus-star" alt=""></img>
                  </div>
                </div>
                <div className="cus-cmt">
                  <p className="cus-conten">{item.comment}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bar-croll">
          <div className="bar-croll-dot">
            <div className="roll-dot">
              <span className="roll-dot-light"></span>
            </div>
            <div className="rol-dot">
              <span className="roll-dot-dot"></span>
            </div>
            <div className="rol-dot">
              <span className="roll-dot-dot"></span>
            </div>
            <div className="rol-dot">
              <span className="roll-dot-dot"></span>
            </div>
          </div>
          <div className="dot-change">
            <img src="./back.svg" className="dotnext-img" alt="loading"></img>
            <img src="./next.svg" className="dotback-img" alt="loading"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Customer;
