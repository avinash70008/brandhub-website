
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { useNavigate } from "react-router"
import axios from "axios"

export const ShirtDetails = () => {
    const  [toogle, setToogle]= useState(true)

    const {_id} = useParams()
    const navigate = useNavigate();
    const [data ,setData] = useState([])
    let BackendCart = []

    const handleCart=()=>{
        navigate("/cart")
    }
    
    useEffect(()=>{
        
        axios.get("https://avinashbrandhub.herokuapp.com/cart").then((data)=>{
            console.log("useEffect", data.data)
            let ans = data.data
            BackendCart = ans
           
           })
    }, [])
    
    useEffect(()=>{getData()},[])

    var ShirtData = useSelector((store)=> store.shirt.shirt)
    console.log(ShirtData)
    
     const getData = ()=>{
         console.log(_id)
        let updatedData = ShirtData.filter((el)=>el._id===_id )
        setData(updatedData)
     }
   // console.log(data)

   

   function AddToCart(el){
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
           setToogle(false)
        
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

                    { 
                    
                        toogle?
                        <button onClick={()=>AddToCart(el)} style={{"padding":"10px", 'backgroundColor':"blue","borderRadius":"10px",
                            
                       "color": "white","cursor":"pointer" }}>ADD TO CART</button>
                       :
                       <button  onClick={handleCart} style={{"padding":"10px","borderRadius":"10px"}}>
                    Go to cart
                    </button>              
                  }
                    </div>
                ))}
                </div>


       </>
    )
}