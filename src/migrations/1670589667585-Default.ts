import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1670589667585 implements MigrationInterface {
    name = 'Default1670589667585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`budget\` (\`id\` int NOT NULL AUTO_INCREMENT, \`client_name\` text NOT NULL, \`phone\` text NOT NULL, \`email\` text NOT NULL, \`instagram\` text NOT NULL, \`whatsapp\` text NOT NULL, \`schedule_date\` text NOT NULL, \`service_id\` text NOT NULL, \`status_id\` text NOT NULL, \`payment\` text NOT NULL, \`price\` text NOT NULL, \`created_date\` text NOT NULL, \`is_from_web\` text NOT NULL, \`description\` longtext NOT NULL, \`schedule_hour\` text NOT NULL, \`gender\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`service\` (\`id\` int NOT NULL AUTO_INCREMENT, \`label\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`status\` (\`id\` int NOT NULL AUTO_INCREMENT, \`label\` text NOT NULL, \`background_color\` text NOT NULL, \`color\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`status\``);
        await queryRunner.query(`DROP TABLE \`service\``);
        await queryRunner.query(`DROP TABLE \`budget\``);
    }

}
