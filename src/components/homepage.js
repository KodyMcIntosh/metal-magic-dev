import { React } from "react";
import earIcon from "../../src/img/earIcon.png";
import needlesIcon from "../../src/img/needlesIcon.png";
import eyeIcon from "../../src/img/eyeIcon.png";
import leroi from "../../src/img/leroiFineJewellery.png"
import bodyGems from "../../src/img/bodyGems2.png"
import peoplesJewelry from "../../src/img/peoplesJewelry2.png"
import junipurr from "../../src/img/junipurr2.png"
import buddha from "../../src/img/buddhaJewelleryOrganics2.png"
import modernMood from "../../src/img/modernMood2.png"
import gorillaGlass from "../../src/img/gorillaGlass.png"
import ContactPage from "./contactpage";
import { Link } from "react-router-dom";

const HomePage = () => {

  return <>
  <div className="introText">
  <h1>Hello and welcome to Metal Magic Piercings</h1>
  <h3>We are an Auckland based piercing studio that provide top quality services and jewellery. <br />Safety, hygiene, and self-expression are at the forefront of what we do.</h3>
  </div>
  <div className="homeBlocks">
    <div className="blockLeft homeContentBlock">
      <p className="homeContentImage"><img src={earIcon} alt="ear piercing icon" /></p>
      <h3>Choosing a Piercing</h3>
      <h4>Whether you have something in mind or you just want something new, we will help you choose a piercing that suits your style and your anatomy.</h4>
      <p className="button"><Link to={"/piercings"}>More Info</Link></p>
    </div>
    <div className="blockCentre homeContentBlock">
    <p className="homeContentImage"><img src={needlesIcon} alt="needles icon" /></p>
      <h3>What to Expect</h3>
      <h4>Whether you're a first-timer or a seasoned pro, we have the answers to all of your frequently asked questions.</h4>
      <p className="button"><Link to={"/faq"}>More Info</Link></p>
    </div>
    <div className="blockRight homeContentBlock">
    <p className="homeContentImage"><img src={eyeIcon} alt="eyebrow piercing icon" /></p>
      <h3>Make a Booking</h3>
      <h4>Ready to make a booking? <br />Schedule your appointment today through our easy online system.</h4>
      <p className="button"><Link to={"/bookings"}>Book Appointment</Link></p>
    </div>
  </div>

  <h2>Our Jewellery Brands</h2>
  <div className="homeJewelleryFeature">
    <div className="homeJewelleryOne">
      <div className="homeJewelleryItem">
        <img src={modernMood} alt="Modern Mood" />
        <h3>Modern Mood</h3>
        <p className="button"><Link to="https://www.instagram.com/modernmoodjewelry/" target="_blank">View Instagram</Link></p>
      </div>
      <div className="homeJewelleryItem">
        <img src={gorillaGlass} alt="Gorilla Glass" />
        <h3>Gorilla Glass</h3>
        <p className="button"><Link to="https://www.instagram.com/gorillaglass/" target="_blank">View Instagram</Link></p>
      </div>
    </div>

    <div className="homeJewelleryTwo">
     <div className="homeJewelleryItem">
        <img src={leroi} alt="LeRoi Fine Jewelry" />
        <h3>LeRoi Fine Jewelry</h3>
        <p className="button"><Link to="https://www.instagram.com/leroifinejewellery/" target="_blank">View Instagram</Link></p>
      </div>
      <div className="homeJewelleryItem">
        <img src={junipurr} alt="Junipurr" />
        <h3>Junipurr</h3>
        <p className="button"><Link to="https://www.instagram.com/junipurrjewelry/" target="_blank">View Instagram</Link></p>
      </div>
    </div>

    <div className="homeJewelleryThree">
      <div className="homeJewelleryItem">
        <img src={bodyGems} alt="Body Gems" />
        <h3>Body Gems</h3>
        <p className="button"><Link to="https://www.instagram.com/bodygems/" target="_blank">View Instagram</Link></p>
      </div>
      <div className="homeJewelleryItem">
        <img src={buddha} alt="Buddha Jewelry Organics" />
        <h3>Buddha Jewelry Organics</h3>
        <p className="button"><Link to="https://www.instagram.com/buddhajewelryofficial/" target="_blank">View Instagram</Link></p>        
      </div>
    </div>

    <div className="homeJewelleryFour">
      <div className="homeJewelleryItem">
        <img src={peoplesJewelry} alt="Peoples Jewelry" />
        <h3>Peoples Jewelry</h3>
        <p className="button"><Link to="https://www.instagram.com/peoplesjewellers/" target="_blank">View Instagram</Link></p>
      </div>
    </div>
  </div>

<div className="homeContact">
    <ContactPage />
</div>

  </>
};

export default HomePage;
