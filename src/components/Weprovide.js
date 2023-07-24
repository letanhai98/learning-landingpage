function Weprovide() {
  const itemList = [
    "Powerfull online protection.",
    "Internet without borders.",
    "Supercharged VPN.",
    "No specific time limits.",
  ];
  return (
    <div className="container feature">
      <div className="feature-container">
        <img
          src="./feature.png"
          className="feature-img"
          alt="Feature Image"
        ></img>
        <div className="feature-content">
          <div className="feature-heading">
            <h2 className="heading-fea">
              We Provide Many Features You Can Use
            </h2>
            <p className="heading-title">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
          </div>
          <div className="feature-list">
            <ul className="feature-item">
              {itemList.map((item, index) => {
                return (
                  <li key={index} className="f-item-feature">
                    <img
                      src="./tickbox.svg"
                      className="check"
                      alt="Tick Check"
                    ></img>
                    <p className="item-title">{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Weprovide;
