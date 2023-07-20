function Plan() {
  const planList = [
    {
      img: "",
      name: "Free Llan",
      list: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      price: "Free",
    },
    {
      img: "",
      name: "standard plan",
      list: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
      ],

      price: 9,
    },
    {
      img: "",
      name: "Premium Plan",
      list: [
        "Unlimited Bandwitch",

        "Encrypted Connection",

        "No Traffic Logs",

        "Works on All Devices",

        "Connect Anyware",

        "Get New Features",
      ],

      price: 12,
    },
  ];
  return (
    <div className="hero-plan">
      <div className="plan">
        <div className="plan-header">
          <h2 className="plan-heading">Choose Your Plan</h2>
          <p className="plan-text">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
        </div>
        <div className="plan-list">
          {planList.map((item, index) => {
            return (
              <div key={index} className="plan-list-item">
                <div className="item-img">
                  <img src="./luckybox.svg" className="box-img"></img>
                  <h3 className="box-title">{item.name}</h3>
                </div>
                <div className="item-list">
                  {item.list.map((thinh, indexthinh) => {
                    return (
                      <div key={indexthinh} className="item-detail">
                        <img src="check.svg" alt="loading"></img>
                        <span>{thinh}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="plan-work">
                  <h4 className="plan-price">
                    {item.price === "Free" ? null : "$"}
                    {item.price}
                    {item.price === "Free" ? null : (
                      <span className="price">/ mo</span>
                    )}
                  </h4>
                  <a href="/#" className="Buttom">
                    Select
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Plan;
