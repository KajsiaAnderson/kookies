import styles from './CartItem.module.css';

const CartItem = (props) => {
  return (
    <li className={styles['cart-item']}>
      <img className={styles.cartImage} src={props.image} alt="cookies" />
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>${props.price}</span>
        </div>
        <div className={styles.remove}>
          <button className={styles.removeBtn} onClick={props.clearItem}>Remove</button>
        </div>
      </div>
      <div>
        <div className={styles.actions}>
          <button className={styles.btn} onClick={props.onRemove}>−</button>
          <span className={styles.amount}>{props.amount}</span>
          <button className={styles.btn} onClick={props.onAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;