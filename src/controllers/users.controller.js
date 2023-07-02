import User from '../models/User.js'
import Role from '../models/Role.js'

export const createUser = async (req, res) => {

    try {
        const { rut, name, lastName, email, phone, password, roles } = req.body; //FALTARIA tipoUser COMO VARIABLE A INGRESAR

        const foundRoles = await Role.find({ name: { $in: roles } });

        const user = new User({
            rut,
            name,
            lastName,
            email,
            phone,
            password,
            
        });

        if (roles) {
            const foundRoles = await Role.find({ name: { $in: roles } });
            user.roles = foundRoles.map((role) => role._id);
          } else {
            const role = await Role.findOne({ name: "user" });
            user.roles = [role._id];
          }


        user.password = await User.encryptPassword(user.password);
        //COPIA DEL USUARIO QUE SE A GUADADO
        const userSaved = await user.save()
        //console.log(userSaved);

        //CODIGOS DE ESTADO, PARA DECIRLE AL NAVEGADOR LO QUE ESTA PASANDO
        res.status(200).json({
            _id: userSaved._id,
            rut: userSaved.rut,
            name: userSaved.name,
            lastName: userSaved.lastName,
            email: userSaved.email,
            phone: userSaved.phone,
            roles: userSaved.roles,
        });
    } catch (error) {
        console.error(error.message);
    }

};
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        console.log(users);
        return res.json(users);

    } catch (error) {
        console.error(error.message)
    }
}
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
    return res.status(200).json(user);
    } catch (error) {
        console.error(error.message);
    }

}

export const updateUserById = async (req, res) => {
    const updateUser = await User.findByIdAndUpdate(req.params.userId, req.body, {
        new: true
    })
    res.status(200).json(updateUser);
}
export const deleteUserById = async (req, res) => {
    const { userId } = req.params;
    await User.findByIdAndDelete(userId);
    res.status(204).json();
}