import { memo } from 'react';
import ProductItem from './ProductItem';
import './Product.modules.css';

const Home = () => {
  return (
    <div>
      <div className="home py-5 pb-2">
        <div className="container">
            <h3 className="title pb-2">Shopping Cart</h3>
          <div className="row">
            <ProductItem />
          </div>
        </div>
        </div>
      </div>
  );
};

export default memo(Home);