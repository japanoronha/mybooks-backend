import { inject, injectable } from "tsyringe";
import Book from "../infra/typeorm/entities/Book";
import IBookRepository from "../repositories/IBookRepository";

@injectable()
class ShowOneBookService {
  constructor(
    @inject('BookRepository')
    private bookRepository: IBookRepository,
  ) {}

  public async execute(id: number): Promise<Book | undefined> {
    const book = await this.bookRepository.findById(id);
    return book;
  }
}

export default ShowOneBookService;
