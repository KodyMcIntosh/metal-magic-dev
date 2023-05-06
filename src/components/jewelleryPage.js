import pushfit from "../../src/img/pushfit.png"
import threaded from "../../src/img/threaded.png"
import captiveBeadRing from "../../src/img/captiveBeadRing.png"
import clicker from "../../src/img/clicker.png"
import seamRing from "../../src/img/seamRing.png"
import titanium from "../../src/img/titanium.png"
import niobium from "../../src/img/niobium.png"
import gold from "../../src/img/gold.png"
import glass from "../../src/img/glass.png"
import healed from "../../src/img/healed.png"
import leroi from "../../src/img/leroiFineJewellery.png"
import bodyGems from "../../src/img/bodyGems2.png"
import peoplesJewelry from "../../src/img/peoplesJewelry2.png"
import junipurr from "../../src/img/junipurr2.png"
import buddha from "../../src/img/buddhaJewelleryOrganics2.png"
import modernMood from "../../src/img/modernMood2.png"
import gorillaGlass from "../../src/img/gorillaGlass.png"
import { Link } from "react-router-dom";

const JewelleryPage = () => {
    return (
      <>
      <h1 className="jewelleryHeading">What is my jewellery made of?</h1>
      <h2>At Metal Magic Piercings, we are proud to only use certified implant grade materials for your piercings. We are happy to provide mill certificates for any of the companies we source jewellery from.</h2>
      <div className="jewelleryBlock">   
        <div className="leftThird">
        <p className="image"><img src={niobium} alt="titanium jewellery icon" /></p>
          <h3>Titanium</h3>
          <p>Implant grade titanium jewellery is the backbone of our studio. This is the material that our barbell posts, flatbacks, captive bead rings and circular barbells are made out of. Our titanium is ASTM F136, which is a lightweight, inert alloy that is safe for people with nickel sensitivities. We can also custom colour your new titanium jewellery for you, through a process called anodization.</p>
          <p className="image"><img src={glass} alt="glass jewellery icon" /></p>
          <h3>Glass</h3>
          <p>Glass jewellery is a great option for those of you stretching your piercings, or wanting to start a fresh piercing at a larger gauge. We stock lead free borosilicate and soda-lime glass from Gorilla Glass Jewelry.</p>
       </div>
        <div className="centreThird">
        <p className="image"><img src={gold} alt="niobium jewellery icon" /></p>
          <h3>Niobium</h3>
          <p>Niobium is an inert, commercially pure metal that has many similar properties to titanium, including its ability to be anodized. Niobium is also more flexible, which makes it an ideal material for rings that need to be bent open and closed.</p>
          <p className="image"><img src={healed} alt="healed jewellery icon" /></p>
          <h3>Jewellery for Healed Piercings</h3>
          <p>We also have a range of solid stone and brass jewellery designed for well-healed, stretched piercings.</p>
        </div>
        <div className="rightThird">
        <p className="image"><img src={titanium} alt="gold jewellery icon" /></p>
          <h3>Gold</h3>
          <p>Gold jewellery has a particular beauty that really is unrivaled by anything else. To be safe for piercings, gold needs to be between 14k to 18k, and be a nickel and cadmium free alloy. At Metal Magic Piercings, all our gold suppliers have verified the safety of their gold alloys. We stock a range of gold ends and rings in yellow, white, and rose gold.</p>
        </div>
      </div>  

      <h2>How does my jewellery work?</h2>
<div className="jewelleryBlock">
  <div className="leftThird">
      <p className="image"><img src={pushfit} alt="pushfit jewellery icon" /></p>
      <h3>Pushfit / Threadless Jewellery</h3>
      <p>This 2 part system of jewellery has a hollow post, and an end with a bent pin on the underside. As the pin slides into the hollow post, the bend straightens out and the tension locks the end in place. Most of our flatback jewellery is threadless.</p>

      <p className="image"><img src={threaded} alt="threaded jewellery icon" /></p>
      <h3>Threaded</h3>
      <p>We only use internally threaded jewellery for your safety and comfort. This style of jewellery has the threading system protruding from the jewellery end, and screws inside the hollow post. This style can be used for flatbacks, straight bars, curved bars, and circular bars. </p>
      </div>
      <div className="centreThird">
      <p className="image"><img src={captiveBeadRing} alt="captive bead ring jewellery icon" /></p>
      <h3>Captive Bead Ring</h3>
      <p>This ring has a small gap to allow for insertion, which is then closed by popping a dimpled ball into the gap.</p>

      <p className="image"><img src={seamRing} alt="seam ring jewellery icon" /></p>
      <h3>Seam Ring</h3>
      <p>This ring is a continuous loop of metal with a small seam where the edges meet, and must be best open and closed to insert. Unless the ring has a decorative element to stop this seam from rotating into the piercing channel, these rings are not appropriate for fresh piercings. </p>
      </div>
      <div className="rightThird">
      <p className="image"><img src={clicker} alt="clicker jewellery icon" /></p>
      <h3>Clicker</h3>
      <p>This ring has a small hinged section that clicks open and closed. Unless the ring has a decorative element to stop the hinge from rotating into the piercing channel, these rings are not appropriate for fresh piercings.</p>
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
      </>
    );
  };
  
  export default JewelleryPage;
  