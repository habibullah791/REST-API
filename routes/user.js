import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Hello </h1>');
});

router.post('/', (req, res) => {
    console.log("rired");
    res.send(req.body);
});


export default router;