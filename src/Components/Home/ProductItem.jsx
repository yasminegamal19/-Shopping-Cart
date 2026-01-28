import { memo } from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import './Product.modules.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../Store/Cart';

const ProductItem = () => {
  const carts = useSelector (store => store.cart.items);
  console.log(carts);

  
const dispatch =useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart({
      productId: item?.id,
      quantity: 1
    }))
  }
     const [products, setProducts] = useState([]);
     const [loading, setLoading] = useState(false);
     const baseUrl = "https://dummyjson.com/products";

     useEffect(() => {
       setLoading(true);

       axios
         .get(baseUrl)
         .then((res) => {
           setProducts(res.data.products);
           setLoading(false);
         })
         .catch((err) => {
           console.log("Error:", err);
           setLoading(false);
         });
     }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {products.slice(5, 13).map((item) => (
            <div className="col-xl-3 col-12" key={item?.id}>
              <div className="item-data my-3 mx-3">
                <div className="item">
                  <p className="price">
                    {`${item?.price} $`}
                  </p>
                  <div className="img">
                    <img src={item?.images?.[0]} alt="" className="w-100" />
                  </div>
                  <div className="content">
                    <Link to={`details/${item?.id}`} className='product-name'>
                      <h5>{item?.title}</h5>
                    </Link>
                    <p className="text">{item?.description}</p>
                    <div className='text-center'>
                    <button className="btn" onClick={() => handleAddToCart(item)}>Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default memo(ProductItem);