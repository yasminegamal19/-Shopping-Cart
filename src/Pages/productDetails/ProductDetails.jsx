import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './details.modules.css'
import { useDispatch , useSelector} from "react-redux";
import { addToCart } from "../../Store/Cart";

const ProductDetails = () => {

  const carts = useSelector((store) => store.cart.items);

  useEffect(() => {
    console.log(carts);
  }, [carts]);


  const [details, setDetails] = useState();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleMinusQuantity = () => {
    setQuantity( quantity -1 < 1 ? 1 : quantity - 1);
  }
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const handleAddToCart = () =>{
    if (!details?.id) return;
    dispatch(addToCart({
      productId: details?.id,
      quantity: quantity 
   } ))
  }
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star text-black-50"></i>);
      }
    }

    return stars;
  };

  return (
    <>
      {details && (
        <div className="details">
          <div className="container">
            <div class="row">
              <div className="col-xl-6 col-12">
                <div className="img">
                  <img src={details?.images?.[0]} alt="" class="w-100" />
                </div>
              </div>
              <div className="col-xl-6 col-12">
                <div className="content d-flex flex-column">
                  <h4>{details?.title}</h4>
                  <p className="price">Price: {`$${details?.price}`}</p>
                  <div className="description">
                    <h5>Description</h5>
                    <p>{details?.description}</p>
                  </div>
                  <p className="quantity">Quantity:</p>
                  <div className="d-flex  align-items-center gap-2">
                    <button
                      className="btn"
                      onClick={() => handleMinusQuantity()}
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      className="btn"
                      onClick={() => handlePlusQuantity()}
                    >
                      +
                    </button>
                  </div>
                  <button className="btn-add" onClick={handleAddToCart}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
