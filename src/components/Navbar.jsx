import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [hideCollapse, setHideCollapse] = useState(true);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          CompanyLogo
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className={`collapse navbar-collapse ${
            hideCollapse === true && 'hide'
          }`}
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li
              className='nav-item'
              onClick={() => setHideCollapse(!hideCollapse)}
            >
              <Link
                to='/'
                className='nav-link active'
                aria-current='page'
              >
                Home
              </Link>
            </li>
            <li
              className='nav-item'
              onClick={() => setHideCollapse(!hideCollapse)}
            >
              <Link to='/users' className='nav-link'>
                Users
              </Link>
            </li>
            <li
              className='nav-item'
              onClick={() => setHideCollapse(!hideCollapse)}
            >
              <Link to='/about' className='nav-link'>
                About
              </Link>
            </li>
          </ul>
          <form className='d-flex'>
            <input
              type='search'
              className='form-control me-2'
              placeholder='Search'
              aria-label='Search'
            />
            <button type='submit' className='btn btn-outline-success'>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
