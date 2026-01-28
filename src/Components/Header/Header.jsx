import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.modules.css';
import { useSelector } from 'react-redux';

const Header = () => {

  const [totalQuantity, setTotalQuantity] = useState(0);

  const carts = useSelector(store => store.cart.items);

  useEffect(() => {
    let total =0;
    carts.forEach(item => total += item.quantity);
    setTotalQuantity(total);
  },[carts])
  return (
    <div className="header py-5 ">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className='logo'>ShopEase</Link>
        <Link to={"cart-tab"}>
          <div className='cart-icon'>
            <img src="/cart.png" alt="" className='w-10'/>
             <span className='absolute text-white bg-danger top-50 '>{totalQuantity}</span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default memo(Header);