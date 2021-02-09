const {Router} = require("express");
const {getContacts, getContact, addContact, deleteContact} = require("../controllers/contacts");
const contactsRouter = Router();

contactsRouter.get("/contacts", getContacts);
contactsRouter.get("/contacts/:id", getContact);
contactsRouter.post("/contacts", addContact);
contactsRouter.delete("/contacts/:id", deleteContact);

module.exports = {
    contactsRouter,
}