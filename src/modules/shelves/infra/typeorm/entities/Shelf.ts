import Book from '@modules/books/infra/typeorm/entities/Book';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity('shelves')
class Shelf {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @OneToMany(() => Book, book => book.shelf.id)
  books: Book[];
}

export default Shelf;
