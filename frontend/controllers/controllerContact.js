const { default: mongoose } = require("mongoose");
const Person = require("../models/person")

// GET contactAll from DB
const getAllContacts = async (req, res) => {
    try {
        const contact = await Person.find();
        res.status(200).json(contact)
    } catch (err) {
        console.error("Error retrieving contacts", err )
        res.status(500).json({ message: "Error retrieving contacts", error: err.message });
    };
}
// GET contactsById from DB
const getContactById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid contact ID" });
    }

    const person = await Person.findById(id);
    if (!person) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json(person);
  } catch (err) {
    console.error("Error retrieving contact by ID", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// POST: Add a new contact
const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, favoriteColor, birthday, url } = req.body;
    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
      return res.status(400).json({ message: "Missing required fields" });
    }

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

    const contactId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(contactId)) {
      return res.status(400).json({ message: "Invalid contact ID" });
    }
    const updated = await Person.findByIdAndUpdate(contactId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json(updated);
    
  } catch (err) {
    console.error("Error updating contact:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
//Delete: deleteContact
const deleteContact = async (req, res) => {
    try {
        const contacId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(contacId)) {
            return res.status(400).json({message: "Invalid contact ID"})
        }
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