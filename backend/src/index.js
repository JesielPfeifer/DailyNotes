const express = require("express"); // importa a lib "express" para a variavel express
const routes = require("./routes");
const cors = require("cors");
const dotenv = require("dotenv");
const connectToDatabase = require("./config/dbConfig.js");

dotenv.config();

const app = express(); // instancia o objeto da lib para a variavel app
const port = 3333;
connectToDatabase();


app.use(cors());
app.use(express.json()); // é um middler que processa os objetos em json,
app.use(routes);
app.listen(port, () => console.log(`Running express on port ${port}`));
