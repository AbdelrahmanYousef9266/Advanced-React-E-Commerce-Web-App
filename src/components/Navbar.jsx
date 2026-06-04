import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../features/cart/cartSlice.js';
import './Navbar.css';

function Navbar() {
  const cartCount = useSelector(selectCartCount);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">🛍️</span>
          <span className="brand-name">ShopReact</span>
        </Link>

        <ul className="navbar-links">
          <li>
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className={`nav-link cart-link ${location.pathname === '/cart' ? 'active' : ''}`}
            >
              <span className="cart-icon">🛒</span>
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
