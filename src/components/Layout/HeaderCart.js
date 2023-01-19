import React, { useContext, useEffect, useState } from 'react'
// import { BsBag } from 'react-icons/bs'
import { CiShoppingCart } from 'react-icons/ci'
import styles from './HeaderCart.module.css'
import CartContext from '../../store/cart-context'

const HeaderCart = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
    const cartCtx = useContext(CartContext)

    const { items } = cartCtx

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    const btnClasses = `${styles.cartBtn} ${btnIsHighlighted ? styles.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return
        }
        setBtnIsHighlighted(true)

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300);

        return () => {
            clearTimeout(timer)
        };
    }, [items])

    return (
        <div>
            <button className={btnClasses} onClick={props.onClick}>
                <CiShoppingCart size="3.25rem" className={styles.icon} />
                {numberOfCartItems === 0 ? !numberOfCartItems : <div className={styles.badge}>{numberOfCartItems}</div>}
            </button>
        </div>
    )
}

export default HeaderCart