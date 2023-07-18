
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <header className='header'>
          <div className='header-container'>
            <img src='./Logo.png' className='header-logo'></img>
            <ul className='menu'>
              <li className='menu-item'>
                <a href='#' className='menuLink'>
                  About
                </a>
              </li>
              <li className='menu-item'>
                <a href='#' className='menuLink'>
                  Features
                </a>
              </li>
              <li className='menu-item'>
                <a href='#' className='menuLink'>
                  Pricing
                </a>
              </li>
              <li className='menu-item'>
                <a href='#' className='menuLink'>
                  Testimonials
                </a>
              </li>
              <li className='menu-item'>
                <a href='#' className='menuLink'>
                    Help
                </a>
              </li>
            </ul>
            <div className='header-user'>
              <a className='sigin'>Sign In</a>
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
                Provide a network for all your needs with ease and fun using <span>xLaslesVPN</span> discover interesting features from us.
              </p>
              <a href='#' className='main-buttom'>Get Started</a>
            </div>
            <div className='main-img'>
              <img src='./dev.png' className='dev-img'></img>
            </div>
          </div>
        </section>
        <section className="intro">
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
        </section>
        <section className="feature">
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
                <li className="feature-item">
                  <img src="./tickbox.svg" className="feature-icon"></img>
                  <span>Powerfull online protection.</span>
                </li>
                <li className="feature-item">
                  <img src="./tickbox.svg" className="feature-icon"></img>
                  <span>Internet without borders.</span>
                </li>
                <li className="feature-item">
                  <img src="./tickbox.svg" className="feature-icon"></img>
                  <span>Supercharged VPN.</span>
                </li>
                <li className="feature-item">
                  <img src="./tickbox.svg" className="feature-icon"></img>
                  <span>No specific time limits.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className='plan'>
          <div className='plan-header'>
            <h2 className='plan-heading'>Choose Your Plan</h2>
            <p className='plan-text'>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
          </div>
          <div className='plan-list'>
            <div className='plan-list-item'>
              <div className='item-img'>
                <img src='./luckybox.svg' className='box-img'></img>
                <h3 className='box-title'>Free Plan</h3>
              </div>
              <div className='item-list'>
              <div className='item-detail'>
                <img src='check.svg'></img>
                <span>Unlimited Bandwitch</span>
              </div>
              <div className='item-detail'>
                <img src='check.svg'></img>
                <span>Encrypted Connection</span>
              </div>
              <div className='item-detail'>
                <img src='check.svg'></img>
                <span>No Traffic Logs</span>
              </div>
              <div className='item-detail'>
                <img src='check.svg'></img>
                <span>Works on All Devices</span>
              </div>
              </div>
              <div className='plan-work'>
              <h4 className='plan-price'>Free</h4>
              <a href='#' className='Buttom'>Select</a>
              </div>
            </div>
            <div className='plan-list-item'>
              <div className='item-img'>
                <img src='./luckybox.svg' className='box-img'></img>
                <h3 className='box-title'>Standard Plan</h3>
              </div>
              <div className='item-list'>
              <div className='item-detail'>
                <img src='check.svg'></img>
                <span>Unlimited Bandwitch</span>
              </div>
              <div className='item-detail'>
                <img src='check.svg'></img>
                <span>Encrypted Connection</span>
              </div>
              <div className='item-detail'>
                <img src='check.svg'></img>
                <span>No Traffic Logs</span>
              </div>
              <div className='item-detail'>
                <img src='check.svg'></img>
                <span>Works on All Devices</span>
              </div>
              <div className='item-detail'>
                <img src='check.svg'></img>
                <span>Connect Anyware</span>
              </div>
              </div>
              <div className='plan-work'>
              <h4 className='plan-price'>$9 <span className='price'>/ mo</span></h4>
              <a href='#' className='Buttom'>Select</a>
              </div>
            </div>
            <div className='plan-list-item'>
              <div className='item-img'>
                <img src='./luckybox.svg' className='box-img'></img>
                <h3 className='box-title'>Free Plan</h3>
              </div>
              <div className='item-list'>
              <div className='item-detail'>
                <img src='check.svg'></img>
                <span>Unlimited Bandwitch</span>
              </div>
              <div className='item-detail'>
                <img src='check.svg'></img>
                <span>Encrypted Connection</span>
              </div>
              <div className='item-detail'>
                <img src='check.svg'></img>
                <span>No Traffic Logs</span>
              </div>
              <div className='item-detail'>
                <img src='check.svg'></img>
                <span>Works on All Devices</span>
              </div>
              <div className='item-detail'>
                <img src='check.svg'></img>
                <span>Connect Anyware</span>
              </div>
              <div className='item-detail'>
                <img src='check.svg'></img>
                <span>Get New Features</span>
              </div>
              </div>
              <div className='plan-work'>
              <h4 className='plan-price'>$12 <span className='price'>/ mo</span></h4>
              <a href='#' className='Buttom'>Select</a>
              </div>
            </div>
          </div>
        </section>
        <section className='network'>
            <div className='network-header'>
              <h2 className='network-heading'>Huge Global Network of Fast VPN</h2>
              <p className='network-title'>See <span className='network-las'>LaslesVPN</span> everywhere to make it easier for you when you move locations.</p>
            </div>
            <div className='network-img'>
              <img src='./network.svg' className='network-map'></img>
            </div>
        </section>
        <section className='customer'>
          <div className='customer-partner'>
            <img src='./netflix.png' className='netflix-img'></img>
            <img src='./reddit.png' className='netflix-img'></img>
            <img src='./amazon.png' className='netflix-img'></img>
            <img src='./discord.png' className='netflix-img'></img>
            <img src='./spotify.png' className='netflix-img'></img>
          </div>
          <div className='customer-header'>
            <h2 className='customer-heading'>Trusted by Thousands of Happy Customer</h2>
            <p className='customer-title'>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
          </div>
          <div className='customer-list'>
            <div className='customer-item'>
              <div className='customer-info'>
                <div className='cus-in4'> 
                  <img src='./cus1.png' className='cus-img'></img>
                  <div>
                    <h3 className='cus-name'>Viezh Robert</h3>
                    <span className='cus-add'>Warsaw, Poland</span>
                  </div>
                </div>
                <div className='cus-rate'>
                  <p className='cus-point'>4.5</p>
                  <img src='star.png' className='cus-star'></img>
                </div>
              </div>
              <div className='cus-cmt'>
                  <p className='cus-conten'>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
              </div>
            </div>
            <div className='customer-item'>
              <div className='customer-info'>
                <div className='cus-in4'> 
                  <img src='./cus2.png' className='cus-img'></img>
                  <div>
                    <h3 className='cus-name'>Yessica Christy</h3>
                    <span className='cus-add'>Shanxi, China</span>
                  </div>
                </div>
                <div className='cus-rate'>
                  <p className='cus-point'>4.5</p>
                  <img src='star.png' className='cus-star'></img>
                </div>
              </div>
              <div className='cus-cmt'>
                  <p className='cus-conten'>“I like it because I like to travel far and still can connect with high speed.”.</p>
              </div>
            </div>
            <div className='customer-item'>
              <div className='customer-info'>
                <div className='cus-in4'> 
                  <img src='./cus3.png' className='cus-img'></img>
                  <div>
                    <h3 className='cus-name'>Kim Young Jou</h3>
                    <span className='cus-add'>Seoul, South Korea</span>
                  </div>
                </div>
                <div className='cus-rate'>
                  <p className='cus-point'>4.5</p>
                  <img src='star.png' className='cus-star'></img>
                </div>
              </div>
              <div className='cus-cmt'>
                  <p className='cus-conten'>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
              </div>
            </div>
          </div>
          <div className='bar-croll'>
              <div className='bar-croll-dot'>
                <img src='./dot.png' className='bar-dot'></img>
              </div>
              <div className='dot-change'>
                <img src='./back.svg' className='dotnext-img'></img>
                <img src='./next.svg' className='dotback-img'></img>
              </div>
            </div>
        </section>
        <section className='footer'>
          <div className='footer-sub'>
            <div className='footer-sub-content'>
              <div className='footer-heading'>Subscribe Now for Get Special Features!</div>
              <p className='footer-title'>Let's subscribe with us and find the fun.</p>
            </div>
            <a href='#' className='footer-btn-sub'>Subscribe Now</a>
          </div>
          <div className='footer-info'>
            <div className='footer-info-title'>
              <div className='footer-icon'>
                <img src='./Logo.png' className='footer-icon-img'></img>
                <p className='footer-icon-content'>LaslesVPN<span className='footer-las'> is a private virtual network that has unique features and has high security.</span></p>
              </div>
              <div className='footer-contact'>
                <img src='./Facebook.svg'></img>
                <img src='./Twitter.svg'></img>
                <img src='./Instagram.svg'></img>
              </div>
              <p className='copyright'>©2020Lasles<span className='footer-vpn'>VPN</span></p>
            </div>
            <div className='footer-collumn'>
              <h3 className='footer-collumn-title'>Product</h3>
              <ul class="footer-links">
                <li class="footer-item">
                  <a href="#" class="footer-link">Download</a>
                </li>
                <li class="footer-item">
                  <a href="#" class="footer-link">Pricing</a>
                </li>
                <li class="footer-item">
                  <a href="#" class="footer-link">Locations</a>
                </li>
                <li class="footer-item">
                  <a href="#" class="footer-link">Server</a>
                </li>
                <li class="footer-item">
                  <a href="#" class="footer-link">Countries</a>
                </li>
                <li class="footer-item">
                  <a href="#" class="footer-link">Blog</a>
                </li>
              </ul>
            </div>
            <div className='footer-collumn'>
              <h3 className='footer-collumn-title'>Engage</h3>
              <ul class="footer-links">
                <li class="footer-item">
                  <a href="#" class="footer-link">LaslesVPN ? </a>
                </li>
                <li class="footer-item">
                  <a href="#" class="footer-link">FAQ</a>
                </li>
                <li class="footer-item">
                  <a href="#" class="footer-link">Tutorials</a>
                </li>
                <li class="footer-item">
                  <a href="#" class="footer-link">About Us</a>
                </li>
                <li class="footer-item">
                  <a href="#" class="footer-link">Privacy Policy</a>
                </li>
                <li class="footer-item">
                  <a href="#" class="footer-link">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div className='footer-collumn'>
              <h3 className='footer-collumn-title'>Earn Money</h3>
              <ul class="footer-links">
                <li class="footer-item">
                  <a href="#" class="footer-link">Affiliate</a>
                </li>
                <li class="footer-item">
                  <a href="#" class="footer-link">Become Partner</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
