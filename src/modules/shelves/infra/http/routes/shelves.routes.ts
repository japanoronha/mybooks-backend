import { Router } from "express";
import ShelvesController from '../controllers/ShelvesController';

const shelvesRouter = Router();
const shelvesController = new ShelvesController();


shelvesRouter.post('/', shelvesController.create);
shelvesRouter.get('/', shelvesController.listAll);
shelvesRouter.get('/:id', shelvesController.findOne);

export default shelvesRouter;
