import styles from './FeatureShoppingCart.module.css';

/* eslint-disable-next-line */
export interface FeatureShoppingCartProps {}

export function FeatureShoppingCart(props: FeatureShoppingCartProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatureShoppingCart!</h1>
    </div>
  );
}

export default FeatureShoppingCart;
