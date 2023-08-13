const express = require("express");
const contacts = require("../controllers/contact.controller");

const route = express.Router();

route.route("/")
    .get(contacts.findALL)
    .post(contacts.create)
    .delete(contacts.deletALL);

route.route("/favorite")
    .get(contacts.findALLFavorite);

route.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);

module.exports = route;