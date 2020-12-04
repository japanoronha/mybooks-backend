import CreateBookDTO from "@modules/books/dtos/CreateBookDTO";
import CreateBookService from "@modules/books/services/CreateBookService";
import ShowBooksService from "@modules/books/services/ShowBooksService";
import ShowOneBookService from "@modules/books/services/ShowOneBookService";
import { Request, Response } from "express";
import { container } from "tsyringe";


export default class BooksController {
  public async create(request: Request, response: Response): Promise<Response> {
    const bookDTO: CreateBookDTO = request.body;

    const createBook = container.resolve(CreateBookService);

    const book = await createBook.execute(bookDTO);

    return response.json(book);
  }

  public async listAll(request: Request, response: Response): Promise<Response> {
    const showBooks = container.resolve(ShowBooksService);

    const books = await showBooks.execute();

    return response.json(books);
  }

  public async findOne(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showOneBook = container.resolve(ShowOneBookService);

    const book = await showOneBook.execute(Number(id));

    return response.json(book);
  }
}
