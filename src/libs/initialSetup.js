import Role from '../models/Role.js';
import User from '../models/User.js';

export const createRoles = async () => {

    try {
        //conteo de documentos
        const count = await Role.estimatedDocumentCount();
        //ver si exiten roles creados
        if (count > 0) return;
        //creamos roles por defecto
        const values = await Promise.all([
            new Role({ name: "user" }).save(),
            new Role({ name: "administrator" }).save()
        ]);

        console.log(values);
    } catch (error) {
        console.error(error.message);
    }
};

createRoles();