function Intro( ) {
    return(
      <div className='hero-intro'>
        <div className='intro'>
          <div className="intro-container">
            <div className="intro-icon">
              <div>
                <img src="user.png"></img>
              </div>
              <div className="intro-info">
                <h3 className="intro-title">
                  <strong>90+</strong>
                </h3>
                <span className="intro-text">User</span>
              </div>
            </div>
            <div className="divider" />
            <div className="intro-icon">
              <div>
                <img src="location.png"></img>
              </div>
              <div className="intro-info">
                <h3 className="intro-title">
                  <strong>30+</strong>
                </h3>
                <span className="intro-text">Location</span>
              </div>
            </div>
            <div className="divider" />
            <div className="intro-icon">
              <div>
                <img src="server.png"></img>
              </div>
              <div className="intro-info">
                <h3 className="intro-title">
                  <strong>50+</strong>
                </h3>
                <span className="intro-text">Server</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Intro;