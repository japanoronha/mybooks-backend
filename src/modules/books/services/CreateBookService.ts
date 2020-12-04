import { inject, injectable } from "tsyringe";
import Book from "../infra/typeorm/entities/Book";
import IBookRepository from "../repositories/IBookRepository";

interface IRequest {
  title: string;
  description: string;
  pages_number: number;
  year: number;
  author: string;
  image?: string;
  shelf_id: number;
}

@injectable()
class CreateBookService {
  constructor(
    @inject('BookRepository')
    private bookRepository: IBookRepository,
  ) {}

  public async execute(data: IRequest): Promise<Book> {
    const book = await this.bookRepository.create(data);
    return book;
  }
}

export default CreateBookService;
