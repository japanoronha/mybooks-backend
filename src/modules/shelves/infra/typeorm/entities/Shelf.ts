import Book from '@modules/books/infra/typeorm/entities/Book';
import {Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity('shelves')
class Shelf {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @OneToMany(() => Book, book => book.shelf_id, {eager: true})
  books: Book[];
}

export default Shelf;
