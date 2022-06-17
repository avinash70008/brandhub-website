import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { FilterPage } from "../Home/FilterPage";
import SelectLabels from "../Home/SelectTag";
import { useNavigate } from "react-router";
import { getBlazerData } from "../../Redux/Blazer/action";


export const Blazer = () => {

    const [color,setColor] = useState("");
  
    const [size,setSize]   = useState("");

    const [sort,setSort]   = useState("");

    const navigate = useNavigate()

    const dispatch = useDispatch();
    useEffect(()=>{getData()},[]);
    
    var BlazerData = useSelector((store)=> store.blazer.blazer)

    const getData = () => {
        
        dispatch(getBlazerData())
    }


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

     // FILTERS ---------------------------->  COLOR , BRAND , SIZE

     BlazerData = BlazerData.filter((el)=>{

        if(color == ""){
            return BlazerData
        }
        else if(el.colour == color){
            return el.colour == color
        }
    
 

    }).filter((el)=>{

        if(size == ""){
            return BlazerData
        }
        else if(el.size == size){
            return el.size == size
        }

    }).sort((a,b) => {

        if(sort == ""){
            return BlazerData
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
        <h1>BLAZER</h1>
        <SelectLabels SortApply={SortApply}/>
        </div>
        <div className="mainDiv">
        <div className="leftDiv">
        <FilterPage settingColor={settingColor}  selectSize={selectSize} />
        </div>
        <div className="rightDiv">
            
            {BlazerData.map((el)=>(
                <div onClick={()=>  navigate(`/blazerdetails/${el._id}`)} key={el._id}>
                    <img src={el.imgUrl}/>
                    <p>{"Rs. "+el.price}</p>
                </div>
            ))}
        </div>
        </div>
        </>
    )
    
}