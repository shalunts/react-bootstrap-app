import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Home, Users, About } from './pages';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <div
        className='d-flex flex-column justify-content-between'
        style={{ minHeight: '100vh' }}
      >
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <main className='container' style={{ flex: '1' }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/users' element={<Users />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
