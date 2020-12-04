import CreateBookDTO from "@modules/books/dtos/CreateBookDTO";
import IBookRepository from "@modules/books/repositories/IBookRepository";
import { getRepository, Repository } from "typeorm";
import Book from "../entities/Book";

class BookRepository implements IBookRepository{
  private ormRepository: Repository<Book>;

  constructor() {
    this.ormRepository = getRepository(Book);
  }

  public async findAll(): Promise<Book[]> {
    const books = await this.ormRepository.find();

    return books;
  }


  public async findById(id: number): Promise<Book | undefined>{
    const book = await this.ormRepository.findOne(id);

    return book;
  }

  public async create(data: CreateBookDTO): Promise<Book>{
    const book = this.ormRepository.create(data);

    await this.ormRepository.save(book);

    return book;
  }
}

export default BookRepository;
