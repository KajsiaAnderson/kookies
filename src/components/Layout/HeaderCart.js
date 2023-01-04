import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import styles from './HeaderCart.module.css'

const HeaderCart = () => {
    return (
        <div>
            <button className={styles.cartBtn}>
                <FiShoppingCart className={styles.icon} />
            </button>
        </div>
    )
}

export default HeaderCart