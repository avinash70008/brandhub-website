
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { useNavigate } from "react-router"

export const BlazerDetails = () => {

    const {_id} = useParams()
    const navigate = useNavigate();
    const [data ,setData] = useState([])
    
    useEffect(()=>{getData()},[])

    var BlazerData = useSelector((store)=> store.blazer.blazer)
    
    
     const getData = ()=>{
         console.log(_id)
        let updatedData = BlazerData.filter((el)=>el._id===_id )
        setData(updatedData)
     }
    //console.log(data)

    let arr = JSON.parse(localStorage.getItem("cartData")) || [];

    function AddToCart(el){
        let cart= JSON.parse(localStorage.getItem("cartData"))||[];

        let temp=   cart.filter((elem)=>{
               if(elem._id==el._id){
                   return elem
               }
              
               
          })
        if(temp.length==0){
           arr.push(el);
           localStorage.setItem("cartData",JSON.stringify(arr)||[]);
           alert("Item add to  cart successful!!")
        
        }
        else{
            alert("Item is already in the cart!!")
        }
  
    }
    

    return(

       <>    
            <div  className="detailsPage">
            {data.map((el)=>(
                <div key={el._id}  className="leftPart">
                    <img src={el.imgUrl} alt="" height="100%" width="100%" />
                </div>

            ))}
            {data.map((el)=>(
                <div key={el._id}  className="rightPart">
                    <h1 id="price"> Rs . {el.price}</h1>
                    <h3> Color - {el.colour}</h3>
                 
                    <h3> Size - {el.size}</h3>

                    <button onClick={()=>AddToCart(el)} id="cartButton">ADD TO CART</button>
                </div>
                
            ))}
            </div>
            

       </>
    )
}