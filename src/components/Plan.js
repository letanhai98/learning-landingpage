function Plan() {
  const listPlan = [
    {
      name: "Free Plan",
      list: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      price: "Free",
    },
    {
      name: "Standard Plan",
      list: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
      ],
      price: "9",
    },
    {
      name: "Premium Plan",
      list: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
        "Get New Features",
      ],
      price: "12",
    },
  ];
  return (
    <div className=" container plan">
      <div className="plan-container">
        <div className="plan-heading">
          <h2 className="plan-header">Choose Your Plan</h2>
          <p className="plan-title">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
        </div>
        <div className="plan-list">
          {listPlan.map((item, index) => {
            return (
              <div key={index} className="plan-list-item">
                <div className="box-name">
                  <img src="./luckybox.svg" alt="Box"></img>
                  <span className="name-box">{item.name}</span>
                </div>
                <div className="plan-list-title">
                  {item.list.map((list, indexlist) => {
                    return (
                      <ul key={indexlist} className="tick-content">
                        <img src="./check.svg" alt="Tick check"></img>
                        <li className="plan-content">{list}</li>
                      </ul>
                    );
                  })}
                </div>
                <div className="plan-buy">
                  <p className="price">
                    {item.price === "Free" ? null : "$"}
                    {item.price}
                    <span className="mo-price">
                      {item.price === "Free" ? null : " / mo"}
                    </span>
                  </p>
                  <a href="#" className="clickbuy">
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
