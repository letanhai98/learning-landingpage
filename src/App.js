
import './App.css';

function App() {
  return (
    <body>
      <header className='header'>
        <div className='container'>
          <div className='header-container'>
            <img src='/Logo.png' className='header-logo'></img>
            <ul className='menu'> 
              <li className='menu-item'>
                <a href='#' className='menulink'>About</a>
              </li>
              <li className='menu-item'>
                <a href='#' className='menulink'>Features</a>
              </li>
              <li className='menu-item'>
                <a href='#' className='menulink'>Pricing</a>
              </li>
              <li className='menu-item'>
                <a href='#' className='menulink'>Testimonials</a>
              </li>

              <li className='menu-item'>
                <a href='#' className='menulink'>Help</a>
              </li>
            </ul>
            <div className='header-user'>
            <a className='signin'>Sign In</a>
            <a className='signup'>Sign Up</a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className='main'>
          <div className='container'>
            <div className='main-container'>
                <div className='main-content'>
                  <h1 className='main-heading'>
                    <strong>Want anything to be easy with LaslesVPN.</strong>
                  </h1>
                  <p className='main-desc'>
                  Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.
                  </p>
                  <a href='#' className='buttom'>Get Started</a>
                </div>
              <div className='img-dev'>
              <img src='dev.png'></img>
              </div>
            </div>
          </div>
        </section>
        <section className='intro'>
          <div className='container'>
            <div className='intro-container'>
              <div className='intro-item'>
              <div className='intro-icon'>
                  <div>
                    <img src='user.png'></img>
                  </div>
                  <div className='intro-info'>
                  <h3 className='title'><strong>90+</strong></h3>
                  <span className='text'>User</span>
                  </div>
                </div>
                <div className='intro-icon'>
                  <div>
                    <img src='location.png'></img>
                  </div>
                  <div className='intro-info'>
                  <h3 className='title'><strong>30+</strong></h3>
                  <span className='text'>Location</span>
                  </div>
                </div>
                <div className='intro-icon'>
                  <div>
                    <img src='Server.png'></img>
                  </div>
                  <div className='intro-info'>
                  <h3 className='title'><strong>50+</strong></h3>
                  <span className='text'>Servers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}

export default App;
