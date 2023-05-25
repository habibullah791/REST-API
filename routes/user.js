import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

let users = [
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
});

router.post('/', (req, res) => {

    const user = req.body;
    const userID = uuidv4();
    const newUser = { ...user, userID };

    users.push(newUser);

    res.send(`User with the name ${req.body.firstName} added to the database!`);
});


router.get('/:id', (req, res) => {

    const userId = req.params.id;
    const foundUser = users.find((user) => user.id === userId);

    if (foundUser) {
        res.send(`Found user is ${JSON.stringify(foundUser)}`);
    } else {
        res.send('User not found');
    }
});


router.delete('/:id', (req, res)=>{
    
    const userId = req.params.id;
    users = users.filter((user)=> user.id !== userId);

    res.send(`User with the id ${userId} is deleted `);
});
export default router;