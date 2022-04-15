import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Home, Users, About } from './pages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div
        className='d-flex flex-column justify-content-between'
        style={{ minHeight: '100vh' }}
      >
        <Navbar />
        <main
          className='container flex-1 mx-auto px-3'
          style={{ flex: '1' }}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/users' element={<Users />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
