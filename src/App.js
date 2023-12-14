import 'normalize.css';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className='header__texts'>
          <h1>Hello Developer!</h1>
          <p className='display-4 mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <picture>
          <source media="(max-width:767px)" srcSet={require("./images/banner-mobile-600x600.png")} />
          <img src={require("./images/banner-desktop-1920x650.png")} alt="" />
        </picture>
      </header>

      <div className='container pt-6'>
        <div className='row row-cols-1 row-cols-md-3 gx-5'>
          <div className="col d-flex">
            <div className='featured'>
              <div className='featured__image' style={{ backgroundImage: `url(${require("./images/content-400x300.png")})` }}>
                <span className='visually-hidden'>alt text for image</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <a href="#">Read more</a>
            </div>
          </div>
          <div className="col d-flex">
            <div className='featured'>
              <div className='featured__image' style={{ backgroundImage: `url(${require("./images/content-400x300.png")})` }}>
                <span className='visually-hidden'>alt text for image</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#">Read more</a>
            </div>
          </div>
          <div className="col d-flex">
            <div className='featured'>
              <div className='featured__image' style={{ backgroundImage: `url(${require("./images/content-400x300.png")})` }}>
                <span className='visually-hidden'>alt text for image</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. </p>
              <a href="#">Read more</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
