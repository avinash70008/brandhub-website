import {Carousel} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeProduct } from "./HomeProduct";

export const Home = () => {

    return(
        <div className="carousel">
            <Carousel variant="dark">

  <Carousel.Item className="Citem">
    <img
      className="d-block w-100"
      src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/16/5dbfe05b-cf14-4bae-b6af-1ce144bfa18c1652718466927-Bestselling-Styles_Desk.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="Ccaption">
     
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/8/c8e64e6b-4e58-45bb-9999-1f323aa7dc601652014311422-Sportswear_Desk.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.myntassets.com/https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/8/ba5790ef-6bfe-427c-8b13-739320e1cba11652015668956-Kurtas---Sets_Desk.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/8/ca060c20-3c8d-44d6-b852-beaf3d0cf0a41652028231412-Handbags---Clutches_Desk.jpg"
      alt="Fourth slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

 <HomeProduct />
 
        
        
        
        
        </div>
    )
}