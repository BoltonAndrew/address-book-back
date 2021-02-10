const {Contact} = require("../models/Contact");


const addContact = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        const savedContact = await contact.save();
        res.status(201).send(savedContact);
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).send({message: "Contact already exists"});
        } else {
            res.status(500).send({ message: "Could not connect"});
        }
    }
};

const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id)
        res.status(200).send(contact);
    } catch (error) {
        res.status(404).send({message: "User not found"});
    }
};

const updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.status(200).send({message: "Update Successful"})
    } catch (error) {
        res.status(404).send({message: "Failed to update contact"})
    }
}

const getContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        res.status(200).send(contact);
    } catch (error) {
        res.status(404).send({message: "Failed to get contact"});
    }
};

const getContacts = async (req, res) => {
    try {
        const contact = await Contact.find({});
        res.status(200).send(contact);
    } catch (error) {
        res.status(404).send({message: "Failed to get all contacts"});
    }
}

module.exports = {
    addContact,
    deleteContact,
    updateContact,
    getContact,
    getContacts,
}