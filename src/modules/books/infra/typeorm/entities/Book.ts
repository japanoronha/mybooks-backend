import Shelf from "@modules/shelves/infra/typeorm/entities/Shelf";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

  @Column()
  image: string;

  @ManyToOne(type => Shelf)
  @JoinColumn({name: 'shelf_id', referencedColumnName: 'id'})
  shelf: Shelf;
}

export default Book;
