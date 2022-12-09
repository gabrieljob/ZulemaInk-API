import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Status extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  label: string;

  @Column("text")
  background_color: string;

  @Column("text")
  color: string;
}
