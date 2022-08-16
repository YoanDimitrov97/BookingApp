import express from "express";
const router = express.Router();

router.get('/', (req, res)=> {
    res.send('We in the room!');
})

export default router