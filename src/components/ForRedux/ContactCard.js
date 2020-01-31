import React from "react";

const ContactCard = (contact) => {
  const ct = contact.contact;
  return (
    <div className="row">
      <div className="col-xs-4 col-sm-3">
          {ct.photo !== undefined ? <img src={ct.photo} alt={ct.email} className="img-fluid rounded-circle" /> : <img src="profile_img.png" width="50" alt="foto" className="img-fluid rounded-circle" />}
      </div>
      <div className="col-xs-8 col-sm-9">
          <span className="name">Email: {ct.email}</span>
          <br/>
          <span className="name">Address: {ct.address}</span>
      </div>
    </div>
  )
}

export default ContactCard;