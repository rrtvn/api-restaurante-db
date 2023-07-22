import jwt from 'jsonwebtoken';
import { SECRET } from '../config';
import User from '../models/User.js';
import Role from '../models/Role.js';

export const verifyToken = async (req, res, next) => {
    const token = req.headers["x-access-token"];
  
    if (!token) return res.status(403).json({ message: "No token provided" });
  
    try {
      const decoded = jwt.verify(token, SECRET);
      req.userId = decoded.id;
  
      const user = await User.findById(req.userId, { password: 0 }); // se coloca password=0 porque no queremos que devuelva la password|
      if (!user) return res.status(404).json({ message: "No user found" });
  
      next();
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