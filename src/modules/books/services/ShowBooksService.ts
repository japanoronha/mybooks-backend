import { inject, injectable } from "tsyringe";
import Book from "../infra/typeorm/entities/Book";
import IBookRepository from "../repositories/IBookRepository";

@injectable()
class ShowBooksService {
  constructor(
    @inject('BookRepository')
    private bookRepository: IBookRepository,
  ) {}

  public async execute(): Promise<Book[]> {
    const books = await this.bookRepository.findAll();
    return books;
  }
}

export default ShowBooksService;
