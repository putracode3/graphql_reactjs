import React, { Component } from "react";
import { connect } from 'react-redux';
import AddContact from "./AddContacts";
import ContactList from "./ContactList";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.returnContactList = this.returnContactList.bind(this);
  }
  returnContactList() {
    // Retrieve contactlist from the store
    return this.props.contactList;
  }
  render() {
    return (
      <div>
        <AddContact/>
        <br />
        <ContactList contactList= {this.returnContactList()} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contactList : state.contacts.contactList,
  }
}

export default connect(mapStateToProps, null) (Contacts);