const express = require("express");
const router = express.Router();

const Contact = require("../model/contact");

router.get("/contact/", (req, res) => {
  Contact.find().then(contacts => res.json(contacts));
});
router.get("/contact/:id", (req, res) => {
  Contact.findOne(req.param.id).then(contacts => res.json(contacts));
});
router.delete("/contact/:id", (req, res) => {
  Contact.findOneAndDelete(req.params.id)
    .then(() => res.send("user deleted"))
    .catch(err => res.send(err));
});
router.post("/contact/", (req, res) => {
  new Contact({ ...req.body })
    .save()
    .then(user => res.send(user))
    .catch(err => res.send(err));
});
router.put("/contact/:id", (req, res) => {
  Contact.findOneAndUpdate(req.params.id, { $set: { ...req.body } })
    .then(user => res.send(user))
    .catch(err => res.send(err));
});

module.exports = router;
