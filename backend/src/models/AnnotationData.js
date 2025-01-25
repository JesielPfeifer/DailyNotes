const mongoose = require('mongoose'); // importa o mongose

//abaixo cria o schema para o mongoDb
const AnnotationDataSchema = new mongoose.Schema({
    title: String,
    notes: String,
    priority: Boolean,
    created_by: String,
});

//exporta o schema criado acima
module.exports = mongoose.model('Annotation', AnnotationDataSchema);
