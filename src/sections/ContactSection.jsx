import "./../styles/sectionsStyle/contact-section.css"

function ContactSection(){
  return(
    <section id="contact-section">
      <div className="info-container">
        <h1 className="section-heading">Our Priority is to <br />
            Ensure the Good <br />
            Health of your <br />
            Swine
        </h1>
        <p className="inform-txt">
          Always be informed and updated to the <br /> services  we provide by joining our community.
        </p>
        <button className="join-btn">Join Now!</button>
      </div>

      <form action="" className="appointment-form">
        <h3 className="heading">Send Your Appointment</h3>
        <p className="reminder-txt">Please ensure all text fields are properly filled out before submitting your appointment request.</p>

        {/*select appointment*/}
        <select id="appointment" name="appointment">
          <option value="">Select Appointment</option>
          <option value="checkup">Checkup</option>
          <option value="vaccination">Vaccination</option>
        </select>

        <div className="group">
          {/*select appointment-schedule*/}
          <select id="schedule" name="schedule">
            <option value="">Schedule Appointment</option>
            <option value="morning">Monday</option>
            <option value="afternoon">Sunday</option>
            <option value="afternoon">Thuesday</option>
            <option value="afternoon">Wednesday</option>
          </select>

          {/*select appointment-time*/}
          <select id="time" name="time">
            <option value="">Time</option>
            <option value="9am">9:00 AM</option>
            <option value="10am">10:00 AM</option>
          </select>
        </div>

        <div className="group">
          {/*select municipality*/}
          <select id="municipality" name="municipality">
            <option value="">Municipality</option>
            <option value="">Boac</option>
            <option value="">Gasan</option>
            <option value="">Mogpog</option>
          </select>

          {/*select barangay*/}
          <select id="barangay" name="barangay">
            <option value="">Barangay</option>
            <option value="">Maligaya</option>
            <option value="">Tanza</option>
            <option value="">Buliasnin</option>   
          </select>
        </div>

        <input type="text" id="full-name" name="full-name" placeholder="Full Name" />
        <input type="email" id="email" name="email" placeholder="Email" />
        <input type="tel" id="phone" name="phone" placeholder="Phone" />

        <button type="submit" className="submit-btn">Request Appointment</button>
      </form>
    </section>
  )
}


export default ContactSection