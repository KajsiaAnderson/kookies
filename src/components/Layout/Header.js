import React, {useState} from 'react'
import styles from './Header.module.css'
import HeaderCart from './HeaderCart'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'

const Header = () => {
    const [cartIsShown, setCartIsShown] = useState(false)

    const showCartHandler = () => {
      setCartIsShown(true)
    }

    const hideCartHandler = () => {
      setCartIsShown(false)
    }

    return (
        <div>
            <header className={styles.header}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h1>k o o k i e s</h1>
                </Link>
                <ul>
                    <Link to="/">
                        <button>home</button>
                    </Link>
                    <Link to="/auth">
                        <button>login</button>
                    </Link>
                    {cartIsShown && <Cart onClose={hideCartHandler} />}
                    <HeaderCart onClick={showCartHandler} />
                </ul>
            </header>
        </div>
    )
}

export default Header