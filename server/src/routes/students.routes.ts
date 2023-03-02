import express, {Request, Response} from "express";
import { createStudent, getStudents } from "../services/students.service";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
 const students = await getStudents();
 res.send(JSON.stringify(students));
});

router.post("/", async (req: Request, res: Response) => {
 const student = await createStudent(req.body);
 res.send(student);
});

export default router;