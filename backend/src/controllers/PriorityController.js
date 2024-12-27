const { query } = require("express");
const Annotations = require("../models/AnnotationData");

module.exports = {
    async read(request, response) {
        //pega o parametro passado na url da rota ex: /priorities?priority=true
        const priority = request.query;
        //passa que o campo priority na consulta no mongo para trazer apenas os que batem com a condição
        const priorityNotes = await Annotations.find(priority);
        return response.json(priorityNotes);
    },

    async update(request, response) {
        //captura o id do params
        const { id } = request.params;
        //query no id do params para pegar no mongo
        const annotation = await Annotations.findOne({ _id: id });
        //caso o priority vir true troca pra false e vice-versa
        if (annotation.priority) {
            annotation.priority = false;
        } else {
            annotation.priority = true;
        }
        //atualiza no banco de dados
        await annotation.save();
        //retorna pra mim o valor atualizado
        return response.json(annotation);
    },
};
