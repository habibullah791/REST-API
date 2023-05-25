import { v4 as uuidv4 } from 'uuid';


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

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUsers = (req, res) => {

    const user = req.body;
    const userID = uuidv4();
    const newUser = { ...user, userID };

    users.push(newUser);

    res.send(`User with the name ${req.body.firstName} added to the database!`);
}

export const getUsersById = (req, res) => {

    const userId = req.params.id;
    const foundUser = users.find((user) => user.id === userId);

    console.log(userId);

    if (foundUser) {
        res.send(foundUser);
    } else {
        res.send('User not found');
    }
}

export const deleteUser = (req, res) => {

    const userId = req.params.id;
    users = users.filter((user) => user.id !== userId);

    res.send(`User with the id ${userId} is deleted `);
}

export const updateUser = (req, res) => {

    const userId = req.params.id;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === userId);

    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }

    res.send(`User with the id ${userId} is updated `);
}