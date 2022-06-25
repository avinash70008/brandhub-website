
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { useNavigate } from "react-router"
import axios from "axios"

export const PantDetails = () => {

    const {_id} = useParams()
    const navigate = useNavigate();
    const [data ,setData] = useState([])
    
    let BackendCart = []
    
    useEffect(()=>{
        
        axios.get("https://avinashbrandhub.herokuapp.com/cart").then((data)=>{
            console.log("useEffect", data.data)
            let ans = data.data
            BackendCart = ans
           
           })
    }, [])
   

    useEffect(()=>{getData()},[])
    var PantData = useSelector((store)=> store.pant.pant)
    console.log(PantData)
    
     const getData = ()=>{
         console.log(_id)
        let updatedData = PantData.filter((el)=>el._id===_id )
        setData(updatedData)
     }
   // console.log(data)

  

   function AddToCart(el){
  

    // let temp=   cart.filter((elem)=>{
    //        if(elem._id===el._id){
    //            return elem
    //        }
          
           
    //   })

      let temp =   BackendCart.filter((elem)=>{
        if(elem._id==el._id){
            return elem
        }
       
        
   })
    if(temp.length==0){
        axios.post("https://avinashbrandhub.herokuapp.com/cart", el).then((data)=>{
            console.log("backend", data)
            alert("Product is Added into the Cart")
           })  
      
    }
    else{
        alert("Item is already in the cart!!")
    }
   }
    

    return(

       <>    
            <div className="detailsPage">
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