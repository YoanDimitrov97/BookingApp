import express from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// router.get('/checkauthentication', verifyToken, (req,res,next)=>{
//     res.send("you are logged in");
// })

// router.get('/checkuser/:id', verifyUser, (req,res,next)=> {
//     res.send('Hello user, you are logged in and can delete your acc')
// })

// router.get('/checkadmin/:id',verifyAdmin, (req,res,next)=>{
//     res.send("You are an admin my friend")
// })

//Update
router.put("/:id", verifyUser, updateUser);

//Delete
router.delete("/:id", verifyUser, deleteUser);

//Get
router.get("/:id", verifyUser, getUser);

//Get All
router.get('/', verifyAdmin, getAllUsers)

export default router;
