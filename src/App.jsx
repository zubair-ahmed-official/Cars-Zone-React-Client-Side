
import Carousel from "./Carousel/Carousel";
import ContactUS from "./ContactUs/ContactUS";
import Gallery from "./Gallery/Gallery";
import Reviews from "./Reviews/Reviews";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import { Helmet } from 'react-helmet';

// import Header from './Header/Header';
function App() {
  return (
    
    <div >
    <Helmet>
        <title>Cars Zone | Home</title>
    </Helmet>
     <Carousel></Carousel>
     <Gallery></Gallery>
     <ShopByCategory></ShopByCategory>
     <Reviews></Reviews>
     <ContactUS></ContactUS>
    </div>
  )
}

export default App
