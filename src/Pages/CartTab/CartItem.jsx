import { memo, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../../Store/Cart";
import "./CartItem.modules.css";

const CartItem = ({ data }) => {
  const { productId, quantity } = data;
  const [details, setDetails] = useState(null);
  const dispatch = useDispatch();

  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      }),
    );
  };
  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      }),
    );
  };

  useEffect(() => {
    if (!productId) return;

    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }, [productId]);

  console.log(details);

  if (!details) return null;

  return (
    <div>
      <div className="container">
        <div className="cart-item row">
          <div className="col-xl-3">
            <img src={details?.images?.[0]} alt="" className="w-50"/>
          </div>
          <h4 className="col-xl-3">{details.title}</h4>
          <p className="col-xl-3">{`${details.price * quantity} $`}</p>
          <div className="col-xl-3">
            <button className="btn" onClick={handleMinusQuantity}>
              -
            </button>
            <span>{quantity}</span>
            <button className="btn" onClick={handlePlusQuantity}>
              +
            </button>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default memo(CartItem);
