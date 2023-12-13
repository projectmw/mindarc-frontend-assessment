import 'normalize.css';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className='header__text'>
          <h1 className='display-1 fw-bold mb-3'>Hello Developer!</h1>
          <p className='display-4 mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <picture>
          <img src={require("./images/banner-desktop-1920x650.png")} alt="" />
        </picture>
      </header>


      <div className='container pt-6'>
        <div className='row row-cols-1 row-cols-md-3 gx-5'>
          <div className="col">
            <div className='featured'>
            <div className='featured__image' style={{ backgroundImage: `url(${require("./images/content-400x300.png")})` }}>
              <span className='visually-hidden'>alt text for image</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>
          <div className="col">
            <div className='featured'>
            <div className='featured__image' style={{ backgroundImage: `url(${require("./images/content-400x300.png")})` }}>
              <span className='visually-hidden'>alt text for image</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>
          <div className="col">
            <div className='featured'>
            <div className='featured__image' style={{ backgroundImage: `url(${require("./images/content-400x300.png")})` }}>
              <span className='visually-hidden'>alt text for image</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
