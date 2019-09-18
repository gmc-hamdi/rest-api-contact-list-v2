import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import ContactCart from "./ContactCart";
import AddContact from "./AddContact";
import { connect } from "react-redux";
import {
  getContacts,
  addContact,
  deleteContact,
  editContact
} from "./actions.js/index";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      id: "",
      edit: false
    };
  }

  componentDidMount = () => {
    this.props.getContacts();
  };

  reset = () => {
    this.setState({
      name: "",
      phone: "",
      email: "",
      edit: false
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getPerson = contact => {
    this.setState({
      id: contact._id,
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      edit: true
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>My Contact</h1>
          <Link to="/contact-list">
            <button className="button">Contact List</button>
          </Link>
          <Link to="/ajouter-contact">
            <button className="button">Add Contact</button>
          </Link>
        </div>
        <Route
          path="/contact-list"
          render={() => (
            <div className="contact-list">
              {this.props.isLoading ? (
                <h1>isLoading</h1>
              ) : (
                this.props.contact.map(el => (
                  <ContactCart
                    key={el._id}
                    contact={el}
                    deleteContact={this.props.deleteContact}
                    getPerson={this.getPerson}
                  />
                ))
              )}
            </div>
          )}
        />
        <Route
          path="/(ajouter-contact|edit-contact)/"
          render={() => (
            <AddContact
              handleChange={this.handleChange}
              action={()=>{this.state.edit
                ? this.props.editContact(this.state)
                : this.props.addContact(this.state)}
                
              }
              contact={this.state}
              edit={this.state.edit}
            />
          )}
        />
      </div>
    );
  }
}
const MapStateToProps = state => ({ ...state });
export default connect(
  MapStateToProps,
  { getContacts, addContact, deleteContact, editContact }
)(App);
