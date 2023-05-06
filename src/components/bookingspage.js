import React from "react";

const BookingForm = () => {

  return (
    <>
    <div className="bookingsPage">
      <h1>Request a Booking</h1>
      <h3>Please use the form below to request a booking with us. Please note that this will not be finalised until we have confirmed it with you, and this will be subject to availability.</h3>
      
<form
  action={process.env.REACT_APP_BOOKINGS_PAGE}
  method="POST"
>
<label className="formLabel"><p><strong>Name*</strong></p>
    <input type="text" name="name" className="bookingsFormInput" required></input><br />
    </label>
    <label className="formLabel"><p><strong>Phone*</strong></p>
    <input type="text" name="phone" className="bookingsFormInput" required></input><br />
    </label>
    <label className="formLabel"><p><strong>Age*</strong></p>
    <p>Please note that if you are under 18 you may need to have the permission of a parent or guardian, depending on what piercing you are interested in receiving. You can see more information about this on our FAQ page.</p>
    <input type="text" name="age" className="bookingsFormInput" required></input><br />
    </label>
  <label className="formLabel"><p><strong>Your email*</strong></p>
    <input type="email" name="email" className="bookingsFormInput" required></input><br />
    </label>
    <hr />
    <label for="queryType" className="formLabel"><p><strong>What are you interested in?*</strong></p></label>
    <select name="queryType" id="queryType" required>
      <option value="" selected="" disabled="" >Select</option>
      <option value="New Piercing" className="selectOption">New Piercing</option>
      <option value="Piercing Follow Up" className="selectOption">Piercing Follow Up</option>
      <option value="Jewellery Change" className="selectOption">Jewellery Change</option>
      <option value="Other" className="selectOption">Other</option>
    </select><br />
    <hr />
    <label for="bookingDay" className="formLabel"><p><strong>What days and times would it suit you best to come and see us?</strong></p></label>
    <select name="day" id="day">
      <option value="Wednesday">Wednesday</option>
      <option value="Thursday">Thursday</option>
      <option value="Friday">Friday</option>
      <option value="Saturday">Saturday</option>
    </select>
    <select name="time" id="time" className="timeSlot">
      <option value="Morning">Morning</option>
      <option value="Lunch">Lunch</option>
      <option value="Afternoon">Afternoon</option>
      <option value="Early Evening">Early Evening</option>
    </select>

<label className="formLabel"><p><strong>Is this your first piercing?</strong></p></label>
<input type="radio" id="yes" name="firstPiercing" value="yes" className="radioButton"/>
<label for="yes">Yes</label><br />
<input type="radio" id="no" name="firstPiercing" value="no" className="radioButton"/>
<label for="no">No</label>

  <label className="formLabel"><p><strong>Please let us know what you are interested in getting done at your appointment.</strong></p>
    <textarea name="message" className="bookingsFormInput"></textarea><br />
  </label><br />
  <button type="submit" className="button">Submit</button>
</form>
</div>
    </>
  );
};

export default BookingForm;