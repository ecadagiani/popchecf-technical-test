import { MigrationInterface, QueryRunner } from "typeorm";

export class Recipe1657550098310 implements MigrationInterface {
    name = 'Recipe1657550098310'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "recipes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "content" character varying NOT NULL, CONSTRAINT "PK_8f09680a51bf3669c1598a21682" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "recipes"`);
    }

}
