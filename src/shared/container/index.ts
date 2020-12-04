import { container } from 'tsyringe';

import BookRepository from '@modules/books/infra/typeorm/repositories/BookRepository';
import IBookRepository from '@modules/books/repositories/IBookRepository';

import ShelfRepository from '@modules/shelves/infra/typeorm/repositories/ShelfRepository';
import IShelfRepository from '@modules/shelves/repositories/IShelfRepository';


container.registerSingleton<IShelfRepository>('ShelfRepository', ShelfRepository);

container.registerSingleton<IBookRepository>('BookRepository', BookRepository);
