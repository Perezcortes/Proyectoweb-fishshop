'use client';

import React from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from '../../../../styles/CartPage.module.css';
import { useCart } from '../../../../context/CartContext';

const CartPage = () => {
    const { carrito, updateQuantity, eliminarDelCarrito } = useCart(); // Asegúrate de tener esta función en el contexto

    const subtotal = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    const descuento = 3.99;
    const envio = 4.99;
    const total = subtotal - descuento + envio;

    return (
        <div className={styles.bodyContainer}>
            <div className={styles.masterContainer}>
                <div className={`${styles.card} ${styles.cart}`}>
                    <label className={styles.title}>Tu Carrito</label>
                    <div className={styles.products}>
                        {carrito.map(({ id_producto, nombre, marca, precio, imagen, cantidad }) => (
                            <div key={id_producto} className={styles.product}>
                                <img src={imagen} alt={nombre} width={60} height={60} />
                                <div>
                                    <span>{nombre}</span>
                                    <p>{marca}</p>
                                    <p>${precio}</p>
                                    <button
                                        className={styles.deleteButton}
                                        onClick={() => eliminarDelCarrito(id_producto)}
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                                <div className={styles.quantity}>
                                    <button className={styles.quantityBtn} onClick={() => updateQuantity(id_producto, cantidad - 1)}>-</button>
                                    <label>{cantidad}</label>
                                    <button className={styles.quantityBtn} onClick={() => updateQuantity(id_producto, cantidad + 1)}>+</button>
                                </div>
                                <label className={`${styles.price} ${styles.small}`}>${(precio * cantidad).toFixed(2)}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`${styles.card} ${styles.checkout}`}>
                    <label className={styles.title}>Ticket</label>
                    <div className={styles.details}>
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                        <span>Descuento:</span>
                        <span>${descuento.toFixed(2)}</span>
                        <span>Envío:</span>
                        <span>${envio.toFixed(2)}</span>
                    </div>
                    <div className={styles.checkoutFooter}>
                        <label className={styles.price}><sup>$</sup>{total.toFixed(2)}</label>
                        <button className={styles.checkoutBtn}>Pagar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
