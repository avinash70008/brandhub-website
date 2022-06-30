import React from "react";
import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";

export const Myaddress = () => {
  const [data, setData] = useState([]);
 


  const navigate = useNavigate()

  useEffect(() => {
   getaddress();
  });

  const getaddress = async () => {
    const response = await fetch("https://avinashbrandhub.herokuapp.com/getaddress");

    setData(await response.json());

    //   console.log("add",data);
  };


  const deleteAddress = (id) => {
   
   
      fetch(`https://avinashbrandhub.herokuapp.com/getaddress/delete/${id}`, { method: 'DELETE' })
          .then((res) => res.json())
          .then(data=>alert("shipping address removed !"))
          getaddress();
      
  }


  return (
    <div>

      {data.map((ad) => {
        return (
          <div key={ad._id}>
            <div key={ad._id} className='d-flex gap-2' style={{"justifyContent":"center"}} >
              <button style={{ "height": "30px" }} onClick={() => navigate(`/getaddress/${ad._id}`)}>Ship to This Address</button>
              <button style={{ "height": "30px" }} onClick={()=>deleteAddress(ad._id)}>Delete</button>
              <h6>address:</h6>
              <p>{ad.firstname}</p>
              <p>{ad.lastname};</p>
              <p>{ad.phone}</p>
              <p>{ad.email}</p>
              <p>{ad.address}</p>

            </div>


          </div>



        )
      }
      )}
    </div>
  );
};