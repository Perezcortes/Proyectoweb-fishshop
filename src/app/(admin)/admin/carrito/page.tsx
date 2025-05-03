'use client';

import React from 'react';
import styles from '../../../../styles/CartPage.module.css';

const CartPage = () => {
  return (
    <div className={styles.bodyContainer}>
    <div className={styles.masterContainer}>
      {/* Tarjeta del Carrito */}
      <div className={`${styles.card} ${styles.cart}`}>
        <label className={styles.title}>Tu Carrito</label>
        <div className={styles.products}>
          <div className={styles.product}>
            <svg fill="none" viewBox="0 0 60 60" height="60" width="60" xmlns="http://www.w3.org/2000/svg">
              <rect fill="#FFF6EE" rx="8.25" height="60" width="60"></rect>
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.25" stroke="#FF8413" fill="#FFB672" d="M34.2812 18H25.7189C21.9755 18 18.7931 20.5252 17.6294 24.0434C17.2463 25.2017 17.0547 25.7808 17.536 26.3904C18.0172 27 18.8007 27 20.3675 27H39.6325C41.1993 27 41.9827 27 42.4639 26.3904C42.9453 25.7808 42.7538 25.2017 42.3707 24.0434C41.207 20.5252 38.0246 18 34.2812 18Z"></path>
              <path fill="#FFB672" d="M18 36H17.25C16.0074 36 15 34.9926 15 33.75C15 32.5074 16.0074 31.5 17.25 31.5H29.0916C29.6839 31.5 30.263 31.6754 30.7557 32.0039L33.668 33.9453C34.1718 34.2812 34.8282 34.2812 35.332 33.9453L38.2443 32.0039C38.7371 31.6754 39.3161 31.5 39.9084 31.5H42.75C43.9926 31.5 45 32.5074 45 33.75C45 34.9926 43.9926 36 42.75 36H42M18 36L18.6479 38.5914C19.1487 40.5947 20.9486 42 23.0135 42H36.9865C39.0514 42 40.8513 40.5947 41.3521 38.5914L42 36M18 36H28.5ZM42 36H39.75Z"></path>
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.25" stroke="#FF8413" d="M18 36H17.25C16.0074 36 15 34.9926 15 33.75C15 32.5074 16.0074 31.5 17.25 31.5H29.0916C29.6839 31.5 30.263 31.6754 30.7557 32.0039L33.668 33.9453C34.1718 34.2812 34.8282 34.2812 35.332 33.9453L38.2443 32.0039C38.7371 31.6754 39.3161 31.5 39.9084 31.5H42.75C43.9926 31.5 45 32.5074 45 33.75C45 34.9926 43.9926 36 42.75 36H42M18 36L18.6479 38.5914C19.1487 40.5947 20.9486 42 23.0135 42H36.9865C39.0514 42 40.8513 40.5947 41.3521 38.5914L42 36M18 36H28.5M42 36H39.75"></path>
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="3" stroke="#FF8413" d="M34.512 22.5H34.4982"></path>
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.25" stroke="#FF8413" d="M27.75 21.75L26.25 23.25"></path>
            </svg>
            <div>
              <span>Cheese Burger</span>
              <p>Extra Spicy</p>
              <p>No mayo</p>
            </div>
            <div className={styles.quantity}>
              <button>
                <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#47484b" d="M20 12L4 12"></path>
                </svg>
              </button>
              <label>2</label>
              <button>
                <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#47484b" d="M12 4V20M20 12H4"></path>
                </svg>
              </button>
            </div>
            <label className={`${styles.price} ${styles.small}`}>$23.99</label>
          </div>
        </div>
      </div>

      {/* Tarjeta de Cupones */}
      <div className={`${styles.card} ${styles.coupons}`}>
        <label className={styles.title}>Apply coupons</label>
        <form className={styles.form}>
          <input 
            type="text" 
            placeholder="Apply your coupons here" 
            className={styles.inputField}
          />
          <button>Apply</button>
        </form>
      </div>

      {/* Tarjeta de Checkout */}
      <div className={`${styles.card} ${styles.checkout}`}>
        <label className={styles.title}>Checkout</label>
        <div className={styles.details}>
          <span>Your cart subtotal:</span>
          <span>47.99$</span>
          <span>Discount through applied coupons:</span>
          <span>3.99$</span>
          <span>Shipping fees:</span>
          <span>4.99$</span>
        </div>
        <div className={styles.checkoutFooter}>
          <label className={styles.price}><sup>$</sup>57.99</label>
          <button className={styles.checkoutBtn}>Checkout</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CartPage;