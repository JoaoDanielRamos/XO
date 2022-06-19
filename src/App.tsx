import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/versus/computer' element={<Home />} />
          <Route path='/versus/player' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
