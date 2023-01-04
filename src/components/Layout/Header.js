import React from 'react'
import styles from './Header.module.css'
import HeaderCart from './HeaderCart'

const Header = () => {
    return (
        <div>
            <header className={styles.header}>
                <h1>k o o k i e s</h1>
                <HeaderCart />
            </header>
        </div>
    )
}

export default Header