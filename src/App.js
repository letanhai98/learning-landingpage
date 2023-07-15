
import './App.css';

function App() {
  return (
    <div className='container'>
      <header className='header'>
        <div className='header-container'>
          <img src='./Logo.png' className='header-logo'></img>
          <ul className='menu'>
            <li className='menu-item'>
              <a href='#' className='menuLink'>About</a>
            </li>
            <li className='menu-item'>
              <a href='#' className='menuLink'>Features</a>
            </li>
            <li className='menu-item'>
              <a href='#'>Pricing</a>
            </li>
            <li className='menu-item'>
              <a href='#'>Testimonials</a>
            </li>
            <li className='menu-item'>
              <a href='#'>Help</a>
            </li>
          </ul>
          <div className='header-user'>
            <a className='signin'>Sign In</a>
            <a className='signup'>Sign Up</a>
          </div>
        </div>
      </header>
      <section className='main'>
        <div className='main-container'>
          <div className='main-content'>
            <h1 className='main-heading'>
              Want anything to be easy with <span>LaslesVPN</span>.
            </h1>
            <p className='main-desc'>
              Provide a network for all your needs with ease and fun using <span className='las'>LaslesVPN</span> discover interesting features from us.
            </p>
            <a href='#' className='buttom'>
              Get Started
            </a>
          </div>
          <div className='img-dev'>
            <img src='/dev.png' className='dev'></img>
          </div>
        </div>
      </section>
      <section className='intro'>
        <div className='intro-container'>
          <div className='intro-icon'>
            <div>
              <img src='user.png'></img>
            </div>
            <div className='intro-info'>
              <h3 className='intro-title'><strong>90+</strong></h3>
              <span className='intro-text'>User</span>
            </div>
          </div>
          <div className='intro-icon'>
            <div>
              <img src='location.png'></img>
            </div>
            <div className='intro-info'>
              <h3 className='intro-title'><strong>30+</strong></h3>
              <span className='intro-text'>Location</span>
            </div>
          </div>
          <div className='intro-icon'>
            <div>
              <img src='server.png'></img>
            </div>
            <div className='intro-info'>
              <h3 className='intro-title'><strong>50+</strong></h3>
              <span className='intro-text'>Server</span>
            </div>
          </div>
        </div>
      </section>
      <section className='feature'>
        <div className='feature-container'>
          <div className='feature-img'>
            <img src='/feature.png'></img>
          </div>
          <div className='feature-content'>
            <h2 className='feature-heading'>
              We Provide Many Features You Can Use
            </h2>
            <p className='feature-text'>
              You can explore the features that we provide with fun and have their own functions each feature.
            </p>
            <ul className='feature-list'>
              <li className='feature-item'>
                <img src='./tickbox.svg' className='feature-icon'></img>
                <span>Powerfull online protection.</span>
              </li>
              <li className='feature-item'>
                <img src='./tickbox.svg' className='feature-icon'></img>
                <span>Internet without borders.</span>
              </li>
              <li className='feature-item'>
                <img src='./tickbox.svg' className='feature-icon'></img>
                <span>Supercharged VPN.</span>
              </li>
              <li className='feature-item'>
                <img src='./tickbox.svg' className='feature-icon'></img>
                <span>No specific time limits.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
