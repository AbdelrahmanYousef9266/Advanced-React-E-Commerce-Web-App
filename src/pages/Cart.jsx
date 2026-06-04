import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartItems, selectCartCount, selectCartTotal, clearCart } from '../features/cart/cartSlice.js';
import CartItem from '../components/CartItem.jsx';
import './Cart.css';

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);
  const [checkoutDone, setCheckoutDone] = useState(false);

  const handleCheckout = () => {
    dispatch(clearCart());
    setCheckoutDone(true);
  };

  if (checkoutDone) {
    return (
      <div className="cart-page">
        <div className="checkout-success">
          <span className="success-icon">🎉</span>
          <h2>Purchase Successful!</h2>
          <p>Your cart has been cleared. Thank you for shopping with us!</p>
          <Link to="/" className="continue-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <span className="empty-cart-icon">🛒</span>
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added anything yet.</p>
          <Link to="/" className="continue-btn">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <h1 className="cart-title">Shopping Cart</h1>
          <span className="cart-item-count">
            {cartCount} item{cartCount !== 1 ? 's' : ''}
          </span>
        </div>

        <div className="cart-layout">
          <div className="cart-items-list">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <h3 className="summary-title">Order Summary</h3>

            <div className="summary-rows">
              {items.map((item) => (
                <div key={item.id} className="summary-row">
                  <span className="summary-item-name">
                    {item.title.length > 30
                      ? item.title.slice(0, 30) + '…'
                      : item.title}{' '}
                    <span className="summary-qty">×{item.quantity}</span>
                  </span>
                  <span className="summary-item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="summary-divider" />

            <div className="summary-total-row">
              <span>Total</span>
              <span className="summary-total">${cartTotal.toFixed(2)}</span>
            </div>

            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout — ${cartTotal.toFixed(2)}
            </button>

            <Link to="/" className="back-link">← Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
