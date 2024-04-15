import './App.css';
import News from './pages/News';
import NavBar from './pages/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/business" element={<News key='business' category='business' />} />
          <Route path="/entertainment" element={<News key='entertainment' category='entertainment' />} />
          <Route path="/health" element={<News key='health' category='health' />} />
          <Route path="/science" element={<News key='science' category='science' />} />
          <Route path="/sports" element={<News key='sports' category='sports' />} />
          <Route path="/technology" element={<News key='technology' category='technology' />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
