import { Div, FlexDiv } from "./FlexBox"

import {useNavigate} from "react-router"

export const HomeProduct = () => {

    const navigate = useNavigate()

    return(
        <div >
            <FlexDiv className="FlexDiv">
                <Div> <button className="boxes" onClick={  ()=> navigate("/tshirt")}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/10/7/697bb8c0-5c99-4d02-b0f9-d46ca72889db1602086685082-dressberrywomen.jpg" alt="" /> </button></Div>
                <Div> <button className="boxes" onClick={  ()=> navigate("/shirt")}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/da4935ce-8f3f-4273-bfbe-6ded783cf2131598948352513-Levis.jpg" alt="" /> </button></Div>
                <Div> <button className="boxes" onClick={  ()=> navigate("/pant")}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/08f15f56-156e-45c8-b0bc-7aecd0b122431598970514602-Veromoda.jpg" alt="" /> </button></Div>
                <Div> <button className="boxes" onClick={  ()=> navigate("/blazer")}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/c8f8c028-21c6-4b65-9d77-188378312e561598892141092-Cutecumber.jpg" alt="" /> </button></Div>
                <Div> <button className="boxes" onClick={  ()=> navigate("/tshirt")}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/ee953e28-7ca8-4e08-a6a9-c51c98f823411598892141010-BIBA.jpg" alt="" /> </button></Div>
                <Div> <button className="boxes" onClick={  ()=> navigate("/shirt")}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/4/e6c7a718-acc0-4aa6-b04c-470ab139d66c1599230080722-F21--4-.jpg" alt="" /> </button></Div>   
            </FlexDiv>

            <div className="sales">
                <img src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/2a0effa7-c662-45c8-8084-96cdea0710c21646911018691-unisex-1499.gif" alt="" height="100%" width="100%" />
            </div>
 
  


        </div>
    ) 
}