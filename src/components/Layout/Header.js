import React, { useState, useContext } from 'react'
import styles from './Header.module.css'
import HeaderCart from './HeaderCart'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'
import AuthContext from '../../store/auth-context'
// import { CiUser } from 'react-icons/ci'
import PositionedMenu from './DropdownMenu'

const Header = () => {
    const authCtx = useContext(AuthContext)
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
                    <li>
                        <Link to='/'>home</Link>
                    </li>
                    {!authCtx.token && <li>
                        <Link to="/auth">login</Link>
                    </li>}
                    {authCtx.token && <PositionedMenu />}
                    {cartIsShown && <Cart onClose={hideCartHandler} />}
                    <HeaderCart onClick={showCartHandler} />
                </ul>
            </header>
        </div>
    )
}

export default Header