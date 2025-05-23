const Person = require("../models/person")

const getAllContacts = async (req, res) => {
    try {
        const contact = await Person.find();
        res.status(200).json(contact)
    } catch (err) {
        console.error("Error retrieving contacts", err )
        res.status(500).json({ message: "Error retrieving contacts", error: err.message });
    };
}
const getContactById = async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        if (!person) {
            return res.status(404).json({message: "Contact no found"});
        }
        res.status(200).json(person);
    } catch (err) {
        console.error("Error retrieving contact by Id", err)
        res.status(500).json({ message: "Error retrieving contact", error: err.message });
    };
};
// POST: Add a new contact
const createContact = async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    await newPerson.save();
    res.status(201).json(newPerson);
  } catch (err) {
    console.error("Error saving contact", err);
    res.status(500).json({ message: "Error saving contact", error: err.message });
  }
};
//PUT: updateContact
const updateContact = async (req, res) => {
    try {
        const contacId = req.params.id;
        const updateContact = await Person.findByIdAndUpdate(contacId, req.body,{
            new: true,
        });
        if (!updateContact) {
            return res.status(404).json({message: "Contact not found"});
        }
        res.status(201).json(updateContact);
    } catch (err) {
        console.error("Error updating contact:", err); 
        res.status(500).json({ message: "Error updating contact", error: err.message });
    }
};
//Delete: deleteContact
const deleteContact = async (req, res) => {
    try {
        const contacId = req.params.id;
        const deletedContact = await Person.findByIdAndDelete(contacId);
        if (!deletedContact) {
            return res.status(404).json({message: "Contact not found"});
        }
        res.status(200).json({message: "Contact deleted"});
    } catch (err) {
        console.error("Error deleting contact:", err); 
        res.status(500).json({ message: "Error deleting contact", error: err.message });
    }
}
module.exports = { getContactById, getAllContacts, createContact, updateContact, deleteContact};