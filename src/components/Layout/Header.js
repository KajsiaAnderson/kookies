import React from 'react'
import styles from './Header.module.css'
import HeaderCart from './HeaderCart'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <div>
            <header className={styles.header}>
                <h1>k o o k i e s</h1>
                <ul>
                    <Link to="/">
                        <button>home</button>
                    </Link>
                    <Link to="/auth">
                        <button>login</button>
                    </Link>
                    <HeaderCart onClick={props.onShowCart} />
                </ul>
            </header>
        </div>
    )
}

export default Header