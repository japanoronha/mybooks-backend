import Book from "../infra/typeorm/entities/Book";
import CreateBookDTO from '../dtos/CreateBookDTO';

export default interface IBookRepository {
  findAll(): Promise<Book[]>;
  findById(id: number): Promise<Book | undefined>;
  create(data: CreateBookDTO): Promise<Book>;
}
