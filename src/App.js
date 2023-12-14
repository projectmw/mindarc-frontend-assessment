import 'normalize.css';

import './styles/App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Exercise2 from './pages/Exercise2';

function App () {
  return (
    <>
<BrowserRouter>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exercise2" element={<Exercise2 />} />
            </Routes>

        </BrowserRouter>
    </>
  )
}

export default App;