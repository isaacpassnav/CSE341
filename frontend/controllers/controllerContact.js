const person = require("../models/person");
// const Person = require("../models/person")

const getAllContacts = async (req, res) => {
    try {
        const people = await Person.find();
        res.status(200).json(people)
    } catch (err) {
        res.status(500).json({message: "Error retrieving contacts", error: err});
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
        res.status(500).json({message: "Error retrieving contact", error: err});
    };
};
// POST: Add a new contact
const createContact = async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    await newPerson.save();
    res.status(201).json(newPerson);
  } catch (err) {
    res.status(500).json({ message: "Error saving contact", error: err });
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
        res.status(500).json({message: err.message});
    }
};
//Delete: deleteContact
const deleteContact = async (req, res) => {
    try {
        const contacId = req.params.id;
        const deletedContact = await person.findByIdAndDelete(contacId, req.body,);
        if (!deletedContact) {
            return res.status(404).json({message: "Contact not found"});
        }
        res.status(200).json({message: "Contact deleted"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}


module.exports = { getContactById, getAllContacts, createContact, updateContact, deleteContact};