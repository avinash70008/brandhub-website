import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getShirtData } from "../../Redux/Shirt/action";
import { FilterPage } from "../Home/FilterPage";
import SelectLabels from "../Home/SelectTag";
import { useNavigate } from "react-router";


export const Shirt = () => {

    const [color,setColor] = useState("");
    
    const [size,setSize]   = useState("");

    const [sort,setSort]   = useState("");

    const navigate = useNavigate()

    // Filter page data

    const settingColor = (value)=>{
        setColor(value)
   }
 
   const selectSize = (value)=>{
            setSize(value)
    }

    //SELECT TAG DATA

     const SortApply = (value)=>{
         setSort(value)
    }


    const dispatch = useDispatch();
    useEffect(()=>{getData()},[]);
    
    var ShirtData = useSelector((store)=> store.shirt.shirt)

    const getData = () => {
        
        dispatch(getShirtData())
    }


    // FILTERS ---------------------------->  COLOR , BRAND , SIZE

    ShirtData = ShirtData.filter((el)=>{

        if(color == ""){
            return ShirtData
        }
        else if(el.colour == color){
            return el.colour == color
        }
    
  
    }).filter((el)=>{

        if(size == ""){
            return ShirtData
        }
        else if(el.size == size){
            return el.size == size
        }

    }).sort((a,b) => {

        if(sort == ""){
            return ShirtData
        }
        else if(sort == "asc"){
            return a.price - b.price
        }
        else if(sort == "desc"){
            return b.price - a.price
        }
    })

    return(
        <>
        
        <div className="selectTag">
        <h1>Formal Shirt</h1>
            <SelectLabels SortApply={SortApply}/>
        </div>
        <div className="mainDiv">
        <div className="leftDiv">
        <FilterPage settingColor={settingColor} selectSize={selectSize} />
        </div>
        <div className="rightDiv">
            
            {ShirtData.map((el)=>(
                <div onClick={()=>  navigate(`/shirtdetails/${el._id}`)} key={el._id}>
                    <img src={el.imgUrl}/>
                    <p>{"Rs. "+el.price}</p>
                </div>
            ))}
        </div>
        </div>
        </>
    )
    
}