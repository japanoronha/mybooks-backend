import Shelf from "@modules/shelves/infra/typeorm/entities/Shelf";
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('books')
class Book{
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  pages_number: number;

  @Column()
  year: number;

  @Column()
  author: string;

  @ManyToOne(() => Shelf, shelf => shelf.books)
  @JoinColumn({name: 'shelf_id', referencedColumnName: 'id'})
  shelf_id: number;
}

export default Book;
