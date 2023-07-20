function Hero() {
  return (
    <div className='hero'>
      <div className='header'>
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
      </div>
    </div>

  );
}

export default Hero;
