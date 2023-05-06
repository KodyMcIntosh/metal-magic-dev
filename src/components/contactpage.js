import React from "react";
import { Link } from "react-router-dom";


const ContactPage = () => {

  return (
 
<div className="contact">
  <div className="contactLeft">
 <h1>Contact Us</h1>
    <h2>Phone: <Link to="tel:006492423382">09 242 3382</Link></h2>
    <hr className="hrule" />
    <h3>15c Union Street<br />
  Auckland CBD
</h3>
<hr className="hrule" />
    <h3>Opening Hours</h3>
    <p><strong>Wednesday</strong> 10am - 6pm<br />
    <strong>Thursday</strong> 10am - 6pm<br />
    <strong>Friday</strong> 10am - 6pm<br />
    <strong>Saturday</strong> 10am - 6pm</p>
     <p>Late nights by appointment only</p>
    
  </div>
  <div className="contactRight">
  <form
  action={process.env.REACT_APP_CONTACT_PAGE}
  method="POST"
>
<label className="formLabel"><p>Name:</p>
    <input type="text" name="name"></input><br />
    </label>
    <label className="formLabel"><p>Phone:</p>
    <input type="text" name="phone"></input><br />
    </label>
  <label className="formLabel"><p>Your email:</p>
    <input type="email" name="email"></input><br />
    </label>
    <label for="queryType" className="formLabel"><p>What are you interested in?</p></label>
    <select name="queryType" id="queryType" required="">
      <option value="" selected="" disabled="">Select</option>
      <option value="New Piercing">New Piercing</option>
      <option value="Piercing Follow Up">Piercing Follow Up</option>
      <option value="Jewellery Change">Jewellery Change</option>
      <option value="Other">Other</option>
    </select><br />
    
  <label className="formLabel"><p>Your message:</p>
    <textarea name="message"></textarea><br />
  </label><br />
  <button type="submit" className="button">Submit</button>
</form>
  </div>
</div>

);
};

export default ContactPage;
