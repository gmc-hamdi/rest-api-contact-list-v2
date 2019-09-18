import axios from "axios";
import { GET_CONTACT } from "./actiontype";

export const getContacts = () => dispatch => {
  dispatch({
    type: "Loading_CONTACT"
  });
  axios
    .get("/contact")
    .then(res =>
      dispatch({
        type: GET_CONTACT,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const addContact = newcontact => dispatch => {
  axios
    .post("/contact", newcontact)
    .then(res => dispatch(getContacts()))
    .catch(err => console.log(err));
};

export const deleteContact = id => dispatch => {
  axios
    .delete(`/contact/${id}`)
    .then(res => dispatch(getContacts()))
    .catch(err => console.log(err));
};

export const editContact = contactUpdated => dispatch => {
  axios
    .put(`/contact/${contactUpdated.id}`, contactUpdated)
    .then(res => dispatch(getContacts()))
    .catch(err => console.log(err));
};
