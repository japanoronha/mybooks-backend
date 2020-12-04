import { Router } from "express";
import BooksController from "../controllers/BooksController";

const booksRouter = Router();
const booksController = new BooksController();


booksRouter.post('/', booksController.create);
booksRouter.get('/', booksController.listAll);
booksRouter.get('/:id', booksController.findOne);

export default booksRouter;
