import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { FilterPage } from "../Home/FilterPage";
import SelectLabels from "../Home/SelectTag";
import { useNavigate } from "react-router";
import { getPantData } from "../../Redux/Pant/action";

export const Pant = () => {

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
    
    var PantData = useSelector((store)=> store.pant.pant)

    const getData = () => {
        
        dispatch(getPantData())
    }


  

    PantData = PantData.filter((el)=>{

        if(color == ""){
            return PantData
        }
        else if(el.colour == color){
            return el.colour == color
        }
    
  
    }).filter((el)=>{

        if(size == ""){
            return PantData
        }
        else if(el.size == size){
            return el.size == size
        }

    }).sort((a,b) => {

        if(sort == ""){
            return PantData
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
        <h1> FORMAL PANT</h1>
            <SelectLabels SortApply={SortApply}/>
        </div>
        <div className="mainDiv">
        <div className="leftDiv">
        <FilterPage settingColor={settingColor} selectSize={selectSize} />
        </div>
        <div className="rightDiv">
            
            {PantData.map((el)=>(
                <div onClick={()=>  navigate(`/pantdetails/${el._id}`)} key={el._id}>
                    <img src={el.imgUrl}/>
                    <p>{"Rs. "+el.price}</p>
                </div>
            ))}
        </div>
        </div>
        </>
    )
    
}