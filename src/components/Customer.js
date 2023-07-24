function Customer() {
  const listReport = [
    {
      avt: "",
      name: "Viezh Robert",
      add: "Warsaw, Poland",
      point: 4.5,
      cmt: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    },
    {
      avt: "",
      name: "Yessica Christy",
      add: "Shanxi, China",
      point: 4.5,
      cmt: "“I like it because I like to travel far and still can connect with high speed.”.",
    },
    {
      avt: "",
      name: "Kim Young Jou",
      add: "Seoul, South Korea",
      point: 4.5,
      cmt: "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
    },
  ];
  return (
    <div className="container customer">
      <div className="customer-container">
        <div className="customer-partner">
          <img
            src="./netflix.png"
            className="partner-img"
            alt="Partner Image"
          ></img>
          <img
            src="./reddit.png"
            className="partner-img"
            alt="Partner Image"
          ></img>
          <img
            src="./amazon.png"
            className="partner-img"
            alt="Partner Image"
          ></img>
          <img
            src="./discord.png"
            className="partner-img"
            alt="Partner Image"
          ></img>
          <img
            src="./spotify.png"
            className="partner-img"
            alt="Partner Image"
          ></img>
        </div>
        <div className="customer-header">
          <div className="cus-heading">
            <h2 className="cus-title">
              Trusted by Thousands of Happy Customer
            </h2>
            <p className="cus-content">
              These are the stories of our customers who have joined us with
              great pleasure when using this crazy feature.
            </p>
          </div>
        </div>
        <div className="cus-report">
          {listReport.map((item, index) => {
            return (
              <div key={index} className="report-item">
                <div className="info-rate">
                  <div className="cus-info">
                    <img
                      src={`./cus${index + 1}.png`}
                      className="c1"
                      alt="Customer Image"
                    ></img>
                    <div className="info">
                      <h3 className="cus-name">{item.name}</h3>
                      <p className="cus-add">{item.add}</p>
                    </div>
                  </div>
                  <div className="cus-rate">
                    <p className="point">{item.point}</p>
                    <img src="./star.png" className="star" alt="Star"></img>
                  </div>
                </div>
                <p className="cus-cmt">{item.cmt}</p>
              </div>
            );
          })}
        </div>
        <div className="bar">
          <ul className="list-bar">
            <li className="toch-bar1"></li>
            <li className="toch-bar"></li>
            <li className="toch-bar"></li>
            <li className="toch-bar"></li>
          </ul>
          <div className="next-back">
            <img src="./back.svg" className="but-back" alt=""></img>
            <img src="./next.svg" className="but-next" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Customer;
