'use client';

import React, { useState } from 'react';
import { FaTrash, FaEye } from 'react-icons/fa';
import { useCart } from '../../../../context/CartContext';
import styles from '../../../../styles/CartPage.module.css';
import { toast } from 'react-toastify'; // Importar toast
import { Producto } from '../../../../types/producto'; // Asegúrate de importar la interfaz Producto

const CartPage = () => {
    const { carrito, updateQuantity, eliminarDelCarrito, mostrarInfoProducto } = useCart();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productToDelete, setProductToDelete] = useState<Producto | null>(null); // Tipo Producto o null

    const subtotal = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    const descuento = 3.99;
    const envio = 4.99;
    const total = subtotal - descuento + envio;

    // Abre el modal de confirmación y establece el producto a eliminar
    const openModal = (producto: Producto) => {
        setProductToDelete(producto);
        setIsModalOpen(true);
    };

    // Cierra el modal sin hacer nada
    const closeModal = () => {
        setIsModalOpen(false);
        setProductToDelete(null);
    };

    // Elimina el producto y cierra el modal
    const confirmDelete = () => {
        if (productToDelete) {
            eliminarDelCarrito(productToDelete.id_producto);
            toast.success("Producto eliminado con éxito", {  // Mostrar el toast
                autoClose: 1300,
            });
            closeModal();
        } else {
            console.error('No se puede eliminar el producto porque no está definido.');
        }
    };

    return (
        <div className={styles.bodyContainer}>
            <div className={styles.masterContainer}>
                <div className={`${styles.card} ${styles.cart}`}>
                    <label className={styles.title}>Tu Carrito</label>
                    {carrito.length === 0 ? (
                        <p className={styles.emptyCartMessage}>Tu carrito está vacío, agrega productos.</p>
                    ) : (
                        <div className={styles.products}>
                            {carrito.map((producto) => (
                                <div key={producto.id_producto} className={styles.product}>
                                    <img src={producto.imagen} alt={producto.nombre} width={60} height={60} />
                                    <div>
                                        <span>{producto.nombre}</span>
                                        <p>{producto.marca}</p>
                                        <p>${producto.precio}</p>
                                        <div className={styles.buttonsContainer}>
                                            <button
                                                className={styles.deleteButton}
                                                onClick={() => openModal(producto)} // Abre el modal
                                            >
                                                <FaTrash />
                                            </button>
                                            <button
                                                className={styles.viewButton}
                                                onClick={() => mostrarInfoProducto(producto)}
                                            >
                                                <FaEye />
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.quantity}>
                                        <button className={styles.quantityBtn} onClick={() => updateQuantity(producto.id_producto, producto.cantidad - 1)}>-</button>
                                        <label>{producto.cantidad}</label>
                                        <button className={styles.quantityBtn} onClick={() => updateQuantity(producto.id_producto, producto.cantidad + 1)}>+</button>
                                    </div>
                                    <label className={`${styles.price} ${styles.small}`}>${(producto.precio * producto.cantidad).toFixed(2)}</label>
                                </div>
                            ))}
                        </div>
                    )}
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

            {/* Modal de confirmación */}
            {isModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <h3>¿Estás seguro de que quieres eliminar este producto?</h3>
                        <div className={styles.modalActions}>
                            <button className={styles.cancelBtn} onClick={closeModal}>Cancelar</button>
                            <button className={styles.confirmBtn} onClick={confirmDelete}>Confirmar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
