const Annotations = require('../models/AnnotationData');

module.exports = {
    async read(request, response) {
        const created_by = request.id;
        const annotationList = await Annotations.find({ created_by });
        if (!annotationList || annotationList.length === 0) {
        } else {
            return response.json(annotationList);
        }
    },

    async create(request, response) {
        //desestrutura nas variaveis o request enviado do front para o bkend
        const { title, notes, priority } = request.body;
        if (!notes || !title) {
            return response
                .status(400)
                .json({ error: 'Necessario um título ou Anotação' });
        }
        const annotationCreated = await Annotations.create({
            title,
            notes,
            priority,
            created_by: request.id,
        });
        return response.json(annotationCreated);
    },

    async delete(request, response) {
        const { id } = request.params;
        const annotationDeleted = await Annotations.findOneAndDelete({
            _id: id,
        });

        if (annotationDeleted) {
            return response.json(annotationDeleted);
        }
        return response
            .status(401)
            .json({ error: 'Não foi encontrado o registro para delete' });
    },
};
