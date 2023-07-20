function Feature () {
  const featureList = ["Powerfull online protection.","Internet without borders.","Supercharged VPN.", "No specific time limits."]
  return (
    <div className='hero-feature'>
        <div className="feature">
          <div className="feature-container">
            <div className="feature-img">
              <img src="/feature.png"></img>
            </div>
            <div className="feature-content">
              <h2 className="feature-heading">
                We Provide Many Features You Can Use
              </h2>
              <p className="feature-text">
                You can explore the features that we provide with fun and have
                their own functions each feature.
              </p>
              <ul className="feature-list">
                {/* vì sao không được đặt key bằng index trong react */}
                {featureList.map((item, index) => {
                  return  <li key={index} className="feature-item">
                  <img src="./tickbox.svg" className="feature-icon"></img>
                  <span>{item}</span>
                </li>
                })}
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Feature;