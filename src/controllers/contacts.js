
const addContact = async (req, res) => {
    try {
        const contact = new contact(req.body);
        const savedContact = await contact.save;
        res.status(201).send({savedContact});
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
        await req.contact.remove();
        res.status(200).send(contact);
    } catch (error) {
        res.status(404).send({message: "User not found"});
    }
};