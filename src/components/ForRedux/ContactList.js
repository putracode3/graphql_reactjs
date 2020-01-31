import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  return (
    <div>
      <ul className="list-group" id="contact-list">
        {props.contactList.map((contact) =>
          <li key={contact.email} className="list-group-item"> 
            <ContactCard contact = {contact}/>
          </li>
        )}
      </ul>
    </div>
  )
}

export default ContactList;