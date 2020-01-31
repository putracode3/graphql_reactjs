import React, { Component } from "react";
import AddContactForm from "./AddContactForm";
import { connect } from "react-redux";
import { addContact, handleInputChange, toggleContactForm } from "../../actions";

class AddContact extends Component {
  constructor(props) {
    super(props);
    /* Function binding goes here. Omitted for brevity */
    this.showAddContactBox = this.showAddContactBox.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showAddContactBox() {
    /* Logic for toggling ContactForm */
    const { onToggle }  = this.props;
    onToggle();
  }

  handleInputChange(event) {
    /* Logic for handling Input Change */
    const target = event.target;
    const value = target.value;
    const name = target.name;
 
    const { onInputChange } = this.props;
    onInputChange(name,value); 
  }

  handleSubmit(e) {
    /* Logic for hiding the form and update the state */
    e.preventDefault();
    this.props.onToggle();
    this.props.onFormSubmit();
  }
   
  /* Renders the AddContactForm */
  renderForm() {
    return(
      <div className="col-sm-8 offset-sm-2">
        <AddContactForm onFormSubmit={this.handleSubmit} onInputChange={this.handleInputChange} />
      </div>
    )
  }
  render() {
    return(
      <div>
        { /* A conditional statement goes here that checks whether the form should be displayed or not */}
        <hr/>
        { this.props.isHidden === false ? this.renderForm(): <button onClick={this.showAddContactBox} className="btn btn-primary"> Add Contact </button>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isHidden : state.ui.isContactFormHidden,
    newContact: state.contacts.newContact
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFormSubmit: (newContact) => {
      dispatch(addContact(newContact));
    },
    onInputChange: (name,value) => {
      dispatch(handleInputChange(name,value));
    },
    onToggle: () => {
      dispatch(toggleContactForm());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContact);