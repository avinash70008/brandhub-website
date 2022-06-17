import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const Cart = () => {
  let total = 0;
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const incrementQuantity = id => {
    let temp = data;
    let updated = temp.filter((el)=>{
      if(el.id==id){
        el.quantity++
      }
      return el
    })
   
    localStorage.setItem("cartData",JSON.stringify([...updated]))
    let cartData = JSON.parse(
      localStorage.getItem("cartData")||[]);
    setData([...cartData]);
    
  };

  const decrementQuantity = id => {
    let temp = data;
    let updated = temp.filter((el)=>{
      if(el.id==id && el.quantity>1){
        el.quantity--
      }
      return el
    })
   
    localStorage.setItem("cartData",JSON.stringify([...updated]))
    let cartData = JSON.parse(
      localStorage.getItem("cartData")
    );
    setData([...cartData]);
    
  };
  const deleteItem = index => {
    console.log(index);
    let cartData = JSON.parse(
      localStorage.getItem("cartData")
    );
    cartData.splice(index, 1);
    localStorage.setItem(
      "cartData",
      JSON.stringify(cartData)
    );

    let newdata = JSON.parse(
      localStorage.getItem("cartData")
    );
    setData([...newdata]);
  };
  useEffect(() => {
    let cartData = JSON.parse(
      localStorage.getItem("cartData")
    );
    setData([...cartData]);
  }, []);
  console.log(data)

  return (
    <>
      <h1 id="mycart">MY CART</h1>
      <div>
        {data.map((el, index) => {
          {total+=Number(el.price*el.quantity)}
          return <div key={index} className="flexdiv">
          <div className="imgdiv">
            {" "}
            <img src={el.imgUrl} alt="" />
          </div>
          <div className="counter">
            <button
              onClick={() => {
                incrementQuantity(el.id);
              }}
            >
              +
            </button>
            <p>{el.quantity}</p>
            <button onClick={() => {
              decrementQuantity(el.id)
            }}>-</button>
          </div>
          <div className="Details">
            <p>Price: {el.price*el.quantity}</p>
            <p>Size: {el.size}</p>
            <p>Brand: {el.brand}</p>
            <p>Colour: {el.colour}</p>
            <button
              onClick={() => {
                deleteItem(index);
              }}
            >
              Remove
            </button>
          </div>
        </div>
        })}
      </div>
      <div>
        <p>Total : {total} </p>
        <button
          onClick={() => navigate("/signup")}
          id="payBtn"
        >
          Proceed to Checkout
        </button>
      </div>
    </>
  );
};
