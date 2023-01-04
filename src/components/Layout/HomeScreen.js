import React from 'react'
// import {IoIosArrowDown} from 'react-icons/io'
import { RxDoubleArrowDown } from 'react-icons/rx'
import styles from './Header.module.css'

const HomeScreen = () => {
  return (
    <div>
           <div className={styles['main-image']}>
                <img src='https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1990&q=80' alt='cookie' />
            </div>
            <div className={styles.arrow}>
                <button className={styles.arrowBtn}>
                    <RxDoubleArrowDown className={styles.iconArrow} />
                </button>
            </div>
    </div>
  )
}

export default HomeScreen