import { memo } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './CartItem.modules.css';

const CartTab = () => {

    const carts = useSelector(store => store.cart.items);
  return (
    <div className="py-5">
      <div className="container">
        <h2>Cart</h2>
        <div className='cart-tab p-5'>
        <div className="row">
          <h3 className="col-xl-3">Product Photo</h3>
          <h3 className="col-xl-3">Title</h3>
          <h3 className="col-xl-3">Total Price</h3>
          <h3 className="col-xl-3">Quantity</h3>
        </div>
        <hr></hr>
        <div className="p-3">
          {carts.map((item, key) => (
            <CartItem key={key} data={item} />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CartTab);