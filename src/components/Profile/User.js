import React from 'react'
import styles from './User.module.css'
import Card from '../UI/Card'

const User = ({ details }) => {
console.log(details)

    return (
        <div>
            <Card>
            <div className={styles.orderDetail}>
                <div>Date: {details.user.createdAt}</div>
                <div>{details.user.firstname} {details.user.lastname}</div>
            </div>
            <div className={styles.orderDetail}>
                <div>{details.order_items[0]?.name}</div>
                <div>${details.order_items[0]?.price}</div>
                <div>x{details.order_items[0]?.amount}</div>
            </div>
           {details.order_items.length >= 2 && <div className={styles.orderDetail}>
                <div>{details.order_items[1]?.name}</div>
                <div>${details.order_items[1]?.price}</div>
                <div>x{details.order_items[1]?.amount}</div>
            </div>}
           {details.order_items.length >= 3 && <div className={styles.orderDetail}>
                <div>{details.order_items[2]?.name}</div>
                <div>${details.order_items[2]?.price}</div>
                <div>x{details.order_items[2]?.amount}</div>
            </div>}
            {details.order_items.length >= 4 && <div className={styles.orderDetail}>
                <div>{details.order_items[3]?.name}</div>
                <div>${details.order_items[3]?.price}</div>
                <div>x{details.order_items[3]?.amount}</div>
            </div>}
            <div className={styles.orderTotal}>Total Amount: ${details.totalAmount}</div>
            </Card>
        </div>
    )
}

export default User