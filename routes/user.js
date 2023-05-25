import express from 'express';


import { createUsers, deleteUser, getUsers, getUsersById, updateUser } from '../controllers/users.js';

const router = express.Router();



router.get('/', getUsers);

router.post('/', createUsers);

router.get('/:id', getUsersById);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);


export default router;