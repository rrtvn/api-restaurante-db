import jwt from 'jsonwebtoken';
import { SECRET } from '../config';
import User from '../models/User.js';
import Role from '../models/Role.js';
import Categoria from '../models/Categoria';

export const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  // console.log(token);

  if (!token) return res.status(403).json({ message: "No token provided" });

  try {
    const decodedToken = jwt.decode(token);
    // console.log(decodedToken);

    const user = await User.findOne({_id: decodedToken.id}); // se coloca password=0 porque no queremos que devuelva la password|
    
    if (!user) return res.status(404).json({ message: "No user found" });

    return res.status(200).json({user})
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized!" });
  }
};



export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    console.log(user);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "admin") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: "Require Admin Role!" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
};