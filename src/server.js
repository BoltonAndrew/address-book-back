require("./db/connection");
const express = require("express");
const cors = require("cors");
const {contactsRouter} = require("./routes/contacts");

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(contactsRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})