import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { WebAdmin } from './pages/WebAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/web-admin" element={<WebAdmin />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
