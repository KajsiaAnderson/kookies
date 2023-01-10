import React, { useContext } from 'react'
import styles from './CookieItem.module.css'
import CookieItemForm from './CookieItemForm'
import CartContext from '../../../store/cart-context'
import { useNavigate } from 'react-router-dom'

const CookieItem = (props) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/kookie/${props.id}`)
    }

    const cartCtx = useContext(CartContext)

    // const price = `$${props.price.toFixed(2)}`

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return (
        <li className={styles.cookies}>
                <img src={props.image} alt="cookies" />
            <div>
                <div className={styles.kookieBtn}>
                <button onClick={handleClick}>{props.name}</button>
                </div>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>${props.price}</div>
                <CookieItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}

export default CookieItem