import { Router } from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = Router();
const appController = new AppController();

router.get('/', appController.getHomepage);

router.get('/students', StudentsController.getAllStudents);

router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
