import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateBooks1606826345837 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'books',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              generationStrategy: 'increment',
            },
            {
              name: 'title',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'description',
              type: 'text',
              isNullable: false,
            },
            {
              name: 'pages_number',
              type: 'int',
              isNullable: false,
            },
            {
              name: 'author',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'year',
              type: 'int',
              isNullable: false,
            },
            {
              name: 'image',
              type: 'varchar',
              isNullable: true,
            },
          ],
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('books');
    }

}
