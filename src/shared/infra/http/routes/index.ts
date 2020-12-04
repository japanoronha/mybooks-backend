import booksRouter from "@modules/books/infra/http/routes/books.routes";
import shelvesRouter from "@modules/shelves/infra/http/routes/shelves.routes";
import { Router } from "express";

const routes = Router();

routes.use('/shelves', shelvesRouter);
routes.use('/books', booksRouter);

export default routes;
