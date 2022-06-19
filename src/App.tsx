import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import styles from './styles/App.module.scss';

import Home from './pages/Home/Home';
import Game from './pages/Game/Game';

function App() {
  return (
    <>
      <Router>
        <div className={styles.app}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='versus/cpu' element={<Game />} />
            <Route path='versus/player' element={<Game />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
