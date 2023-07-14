
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <header className='header'>
        <div className='container'>
          <div className='header-container'>
            <img src='/Logo.png' className='header-logo'></img>
            <ul>
              <li>
                <a href='#' className='menulink'>About</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href='#' className='menulink'>Features</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href='#' className='menulink'>Pricing</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href='#' className='menulink'>Testimonials</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href='#' className='menulink'>Help</a>
              </li>
            </ul>
            <div className='header-user'>
            <a href='#' className='signin'>Singin</a>
            <a href='#' className='signup'>Singup</a>
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
