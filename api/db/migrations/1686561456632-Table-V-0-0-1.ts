import { MigrationInterface, QueryRunner } from 'typeorm'

export class TableV0011686561456632 implements MigrationInterface {
  name = 'TableV0011686561456632'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "container" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "lastname" character varying NOT NULL, "firstname" character varying NOT NULL, "pathfile" character varying NOT NULL, CONSTRAINT "PK_74656f796df3346fa6ec89fa727" PRIMARY KEY ("id"))`)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "container"`)
  }

}
