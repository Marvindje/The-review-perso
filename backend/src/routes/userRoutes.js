import express from "express"
import { userControllers } from '../controllers/usersController'
import { createUserValidator }  from '../validators/userValidator';

const userRoutes = express.Router();

userRoutes.get('/', userControllers.getAllUsers);
userRoutes.get('/:id', userControllers.getUserById);
userRoutes.post('/', createUserValidator, userControllers.createUser);
userRoutes.put('/:id', createUserValidator, userControllers.updateUser);
userRoutes.delete('/:id', userControllers.deleteUser);

export {
    userRoutes
}
