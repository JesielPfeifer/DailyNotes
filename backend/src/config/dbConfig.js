const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connectToDatabase = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cursonodejs.uvau9nn.mongodb.net/database?retryWrites=true&w=majority&appName=CursoNodeJs`
    )
    .then(console.log("Sucesso"))
    .catch((error) => {
        console.log(`Erro ao conectar ${error}`);
    });
};

module.exports = connectToDatabase;
