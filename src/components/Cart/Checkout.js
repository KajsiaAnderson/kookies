import React, { useRef, useState, useContext } from 'react'
import styles from './Checkout.module.css'
import AuthContext from '../../store/auth-context';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {
  const authCtx = useContext(AuthContext)

  // const navigate = useNavigate()
  // const handleClick = () => {navigate(`/auth`)}


  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true
  })

  const nameInputRef = useRef()
  const streetInputRef = useRef()
  const postalInputRef = useRef()
  const cityInputRef = useRef()

  const confirmHandler = (e) => {
    e.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredStreet = streetInputRef.current.value
    const enteredPostal = postalInputRef.current.value
    const enteredCity = cityInputRef.current.value

    const enteredNameIsValid = !isEmpty(enteredName)
    const enteredStreetIsValid = !isEmpty(enteredStreet)
    const enteredCityIsValid = !isEmpty(enteredCity)
    const enteredPostalIsValid = isFiveChars(enteredPostal)

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postal: enteredPostalIsValid
    })

    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalIsValid

    if (!formIsValid) {
      return;
    }

    props.onSubmit({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postal: enteredPostal
    })
  }

  const nameControlClasses = `${styles.control} ${formInputValidity.name ? '' : styles.invalid}`
  const streetControlClasses = `${styles.control} ${formInputValidity.street ? '' : styles.invalid}`
  const postalControlClasses = `${styles.control} ${formInputValidity.postal ? '' : styles.invalid}`
  const cityControlClasses = `${styles.control} ${formInputValidity.city ? '' : styles.invalid}`

  return (
    <div>
      {!authCtx.token ?
        <div className={styles.pleaseLogin}>
          Please <button className={styles.pleaseLoginBtn} onClick={props.onCancel}>
            <Link to='/auth'>Login</Link></button> to complete your order.
        </div> :
        <form className={styles.form} onSubmit={confirmHandler}>
          <div className={nameControlClasses}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' ref={nameInputRef} />
            {!formInputValidity.name && <p>Please enter a valid name</p>}
          </div>
          <div className={streetControlClasses}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' ref={streetInputRef} />
            {!formInputValidity.street && <p>Please enter a valid street</p>}
          </div>
          <div className={cityControlClasses}>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' ref={cityInputRef} />
            {!formInputValidity.city && <p>Please enter a valid city</p>}
          </div>
          <div className={postalControlClasses}>
            <label htmlFor='postal'>Postal Code</label>
            <input type='text' id='postal' ref={postalInputRef} />
            {!formInputValidity.postal && <p>Please enter a valid postal code</p>}
          </div>
          <div className={styles.actions}>
            <button type='button' onClick={props.onCancel}>
              Cancel
            </button>
            <button className={styles.submit}>Confirm</button>
          </div>
        </form>}
    </div>
  )
}

export default Checkout