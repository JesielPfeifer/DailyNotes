const mongoose = require("mongoose"); // importa o mongose

//abaixo cria o schema para o mongoDb
const UserDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

//exporta o schema criado acima
module.exports = mongoose.model("User", UserDataSchema);
