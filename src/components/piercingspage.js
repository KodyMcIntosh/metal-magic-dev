import React from "react";
import mouth from "../../src/img/mouth.png"
import brows from "../../src/img/brows.png"
import earDiagram from "../../src/img/earDiagram2.png"
import faceDiagram from "../../src/img/faceDiagram2.png"
import { Link } from "react-router-dom";

const PiercingsPage = () => {
  return (
    <>
    <div className="piercingsPageIntro">
          <h1>Choosing your Piercing</h1>
          <h3>The diagrams below show some of the possible placements for facial and ear piercings. Please note that all piercings depend on the piercee having the appropriate anatomical features to suit the piercing. If you have something in mind we will assess this and talk you through the options that will work best for your body.</h3>
          </div>
    <div className="piercingsPageBlocks">

      <div className="piercingsLeft"><p className="image"><img src={earDiagram} alt="ear piercing diagram" /></p></div>
      <div className="piercingsRight"><p className="image"><img src={faceDiagram} alt="facial piercing diagram" /></p></div>
    </div>
    <h2>Caring for your Piercing</h2>
<h4>If you still have concerns after reading through your aftercare, please don't hesitate to <Link to="contact">contact us</Link> and we will help answer any questions, Alternatively, ask them at your free follow-up appointment.</h4>

<div className="halves">
  <div className="leftHalf">
  <p className="image"><img src={mouth} alt="oral piercing icon" /></p>
<h2>Oral Piercing Care</h2>
<h3>Cool It</h3>
<p>Oral piercings swell significantly. Letting a piece of crushed ice melt in your mouth to keep your piercing cool will help with this. Nurofen/Ibuprofen can also help with any swelling or discomfort.</p>

<h3>Rinse It</h3>
<p>Rinse your piercing with cool, clean water each time after you've had something to eat or drink, to swish away any food build-up around the piercing. If you already use mouthwash daily, you can continue to do so, providing you use an alcohol-free mouthwash.</p>

<h3>Downsize It</h3>
<p>Oral piercings can cause damage if the long initial jewellery is left in place. It is important for the health of your gums and teeth to downsize to an appropriate length for your anatomy as soon as is possible - for most people this will be around the 2-week mark.</p>


<h3>Things to Avoid</h3>
<ul>
<li>Playing with your piercing</li>
<li>Drinking alcohol, or smoking/vaping</li>
<li>Dirty toothbrushes - use a brand new one</li>
<li>Irritating foods - anything super salty/sour/spicy, or with small particles like seeds/grains, or long stringy foods such as noodles or spaghetti</li>
<li>Other people's bodily fluids - no tongue kissing or oral sex without barriers</li>
</ul>
</div>
<div className="rightHalf">
<p className="image"><img src={brows} alt="general piercing icon" /></p>
<h2>General Piercing Care</h2>

<h3>Cool It</h3>
<p>Piercings can swell in the first few days. You can keep the swelling and discomfort to a minimum by using an icepack. Ibuprofen/Nurofen can also help keep swelling under control.</p>

<h3>Rinse It</h3>
<p>Piercings don't need harsh cleaning. A daily rinse with a sterile saline wound wash, like NeilMed Piercing Aftercare is ideal, or alternatively give it a thorough rinse in the shower.</p>

<h3>Dry It</h3>
<p>Piercings hate excessive moisture. After rinsing, dry your piercing gently, either with a hairdryer set to cool or with a disposable paper towel.</p>

<h3>Things to Avoid</h3>
<ul>
  <li>Dirty water like swimming pools, spas, oceans, lakes, baths etc</li>
<li>Pressure on the piercing, from sleeping, helmets, beanies/hats, earbuds or headphones etc</li>
<li>Touching, turning or fiddling with your piercing</li>
<li>Other people touching or playing with your piercing, or other people's bodily fluids</li>
<li>Harsh cleaning routines like alcohol, Studex, saltwater soaks, antibacterial soaps, antiseptic creams, essential oils etc</li>
</ul>

<h3>Downsize your Jewellery</h3>
<p>Your jewellery has extra length to allow for swelling. Failing to downsize in a timely manner can lead to irritation bumps, and your piercing migrating to an angled position, which will hinder your healing further.</p>
</div>
</div>

<div className="piercingsPageOutro">
<h2>Check Ups</h2>
<h4>All your check ups are included in your original piercing fee. Make sure you book in to see us for this, so if there are any issues with your healing piercing, we can catch it early.</h4>

<h4>If you have any further questions or concerns, please <Link to="contact">contact us.</Link></h4>
</div>
    </>
  );
};

export default PiercingsPage;
