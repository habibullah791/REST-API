import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

const users = [
    {
        id: uuidv4(),
        firstName: 'John',
        lastName: 'Doe',
        age: 25
    },
    {
        id: uuidv4(),
        firstName: 'Jane',
        lastName: 'Doe',
        age: 24
    }
];

router.get('/', (req, res) => {
    res.send(users);
    res.send('<h1>Hello </h1>');
});

router.post('/', (req, res) => {

    const user = req.body;
    const userID = uuidv4();
    const newUser = { ...user, userID };

    users.push(newUser);

    res.send(`User with the name ${req.body.firstName} added to the database!`);
});


export default router;