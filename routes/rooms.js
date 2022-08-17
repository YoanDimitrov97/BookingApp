import express from "express";
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//Create Room
router.post("/:hotelid", verifyAdmin, createRoom)

//Update Room
router.put("/:id", verifyAdmin, updateRoom)

//Delete Room
router.delete("/:id", verifyAdmin, deleteRoom)

//Get Room
router.get('/:id', getRoom)

//Get All Rooms
router.get("/", getAllRooms)

export default router