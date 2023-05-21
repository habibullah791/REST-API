import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 25
    },
    {
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

    users.push(req.body)
    res.send(`User with the name ${req.body.firstName} added to the database!`);
});


export default router;