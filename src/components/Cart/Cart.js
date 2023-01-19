import React, { useContext, useState } from 'react'
import styles from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Checkout from './Checkout'
import axios from 'axios'
import AuthContext from '../../store/auth-context'

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [didSubmit, setDidSubmit] = useState(false)
    const cartCtx = useContext(CartContext)
    const { userId } = useContext(AuthContext)
    // console.log(cartCtx)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    }

    const cartItemClearHandler = (id) => {
        cartCtx.clearItem(id)
    }

    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 })
    }

    const orderHandler = () => {
        setIsCheckout(true)
    }


    const submitOrderHandler = () => {
        setIsSubmitting(true)


        const body = {
            userId: userId,
            totalAmount: cartCtx.totalAmount,
            items: cartCtx.items
        }

        axios.post('/order', body)
            .then((res) => {
                console.log(`submitting order for ${userId}`, res.data)
                console.log('cartCtx.items', cartCtx.items)
                setIsSubmitting(false)
                setDidSubmit(true)
                cartCtx.clearCart()
            })
            .catch(err => {
                console.log('error submitting order', err)
            })
    }

    const cartItems = <ul className={styles['cart-items']}>
        {cartCtx.items.map((item) => (
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                image={item.image}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
                clearItem={cartItemClearHandler.bind(null, item.id)} />
        ))}
    </ul>

    const modalActions = (
        <div className={styles.actions}>
            {hasItems && <button className={styles['button--alt']} onClick={props.onClose}>Close</button>}
            {hasItems && <button className={styles.button} onClick={orderHandler}>Order</button>}
        </div>
    )

    const cartModalContent = (
        <React.Fragment>
            {!hasItems ?
                <div>
                    <p className={styles.text}>Cart is Empty</p>
                    <div className={styles.closeActions}>
                        <button className={styles.closeBtn} onClick={props.onClose}>Go Back</button>
                    </div>
                </div>
                : cartItems}
            {hasItems && <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>}
            {isCheckout && <Checkout onSubmit={submitOrderHandler} onCancel={props.onClose} />}
            {!isCheckout && modalActions}
        </React.Fragment>
    )

    const isSubmittingModalContent = <p className={styles.text}>Sending order data...</p>

    const didSubmitModalContent = (
        <React.Fragment>
            <p className={styles.text}>Your kookie order has been sent!</p>
            <div className={styles.closeActions}>
                <button className={styles.closeBtn} onClick={props.onClose}>Done</button>
            </div>
        </React.Fragment>
    )

    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    )
}

export default Cart