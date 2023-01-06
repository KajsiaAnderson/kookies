import React, { useRef, useState } from 'react'
import styles from './CookieItemForm.module.css'
import Input from '../../UI/Input'

const CookieItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef()

    const submitHandler = e => {
        e.preventDefault()

        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 50) {
            setAmountIsValid(false)
            return;
        }
        
        props.onAddToCart(enteredAmountNumber)
    }
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Quantity"
                input={{
                    id: 'amount' + props.id,
                    type: 'number',
                    min: '1',
                    max: '50',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-50).</p>}
        </form>
    )
}

export default CookieItemForm