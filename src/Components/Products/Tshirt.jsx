import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { FilterPage } from "../Home/FilterPage";
import SelectLabels from "../Home/SelectTag";
import { useNavigate } from "react-router";
import { getTshirtData } from "../../Redux/Tshirt/action";


export const Tshirt = () => {

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
    
    var TshirtData = useSelector((store)=> store.tshirt.tshirt)

    const getData = () => {
        
        dispatch(getTshirtData())
    }




    TshirtData = TshirtData.filter((el)=>{

        if(color == ""){
            return TshirtData
        }
        else if(el.colour == color){
            return el.colour == color
        }
    
  
    }).filter((el)=>{

        if(size == ""){
            return TshirtData
        }
        else if(el.size == size){
            return el.size == size
        }

    }).sort((a,b) => {

        if(sort == ""){
            return TshirtData
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
        <h1>TShirt</h1>
            <SelectLabels SortApply={SortApply}/>
        </div>
        <div className="mainDiv">
        <div className="leftDiv">
        <FilterPage settingColor={settingColor} selectSize={selectSize} />
        </div>
        <div className="rightDiv">
            
            {TshirtData.map((el)=>(
                <div onClick={()=>  navigate(`/tshirtdetails/${el._id}`)} key={el._id}>
                    <img src={el.imgUrl}/>
                    <p>{"Rs. "+el.price}</p>
                </div>
            ))}
        </div>
        </div>
        </>
    )
    
}