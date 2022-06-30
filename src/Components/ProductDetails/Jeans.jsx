
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import {  useNavigate, useParams } from "react-router"

export const JeansDetails = () => {

    const {_id} = useParams()
    
    const navigate = useNavigate();
    const [data ,setData] = useState([])
    
    let BackendCart = []
    
    useEffect(()=>{
        
        axios.get("http://localhost:5000/cart").then((data)=>{
            console.log("useEffect", data.data)
            let ans = data.data
            BackendCart = ans
           
           })
    }, [])


    useEffect(()=>{getData()},[])

    var JeansData = useSelector((store)=> store.jeans.jeans)
    console.log(JeansData)
    
     const getData = ()=>{
        
        let updatedData = JeansData.filter((el)=>el._id==_id )
        setData(updatedData)
     }
    
        // let arr = JSON.parse(localStorage.getItem("cartData")) || []

        function AddToCart(el){
            // let cart= JSON.parse(localStorage.getItem("cartData"))||[];

            let temp=   cart.filter((elem)=>{
                   if(elem._id==el._id){
                       return elem
                   }
                  
                   
              })
            if(temp.length==0){
            //    arr.push(el);
            //    localStorage.setItem("cartData",JSON.stringify(arr)||[]);
            //    alert("Item add to  cart successful!!")

            axios.post("http://localhost:5000/cart", el).then((data)=>{
                console.log("backend", data)
                alert("Product is Added into the Cart")
               })  

            
            }
            else{
                alert("Item is already in the cart!!")
            }
        }
        //console.log(arr)

    return(

       <>    
            <div className="detailsPage">
            {data.map((el)=>(
                <div key={el._id} className="leftPart">
                    <img src={el.imgUrl} alt="" height="100%" width="100%" />
                </div>

            ))}

            {data.map((el)=>(
                <div key={el._id} className="rightPart">
                    <h1 id="price"> Rs . {el.price}</h1>
                    <h3> Color - {el.colour}</h3>
                    <h3> Size - {el.size}</h3>
                    <button onClick={()=>AddToCart(el)} style={{"padding":"10px", 'backgroundColor':"blue","borderRadius":"10px",
                        
                    "color": "white","cursor":"pointer" }}>ADD TO CART</button>  <button onClick={()=>AddToCart(el)}  id="cartButton">ADD TO CART</button>
                </div>
                
            ))}
            </div>
            

       </>
    )
}