import { query } from "express";
import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddShelfIdToBook1606912010300 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
        'books',
        new TableColumn({
          name: 'shelf_id',
          type: 'int',
          isNullable: true,
        }),
      );

      await queryRunner.createForeignKey(
        'books',
        new TableForeignKey({
          name: 'BooksShelf',
          columnNames: ['shelf_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'shelves',
          onDelete: 'SET NULL',
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('books', 'BooksShelf');

      await queryRunner.dropColumn('books', 'shelf_id');
    }

}
