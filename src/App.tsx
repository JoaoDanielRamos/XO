import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import styles from './styles/App.module.scss';

import Home from './pages/Home/Home';
import Cpu from './pages/Game/Cpu';
import Versus from './pages/Game/Versus';

function App() {
  return (
    <>
      <Router>
        <div className={styles.app}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='versus/cpu' element={<Cpu />} />
            <Route path='versus/player' element={<Versus />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
