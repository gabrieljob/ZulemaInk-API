import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Budget extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column("text")
  client_name: string;

  @Column("text")
  phone: string;

  @Column("text")
  email: string;

  @Column("text")
  instagram: string;

  @Column("text")
  whatsapp: string;

  @Column("text")
  schedule_date: string;

  @Column("text")
  service_id: string;

  @Column("text")
  status_id: string;

  @Column("text")
  payment: string;

  @Column("text")
  price: string;

  @Column("text")
  created_date: string;

  @Column("text")
  is_from_web: string;

  @Column("longtext")
  description: string;

  @Column("text")
  schedule_hour: string;

  @Column("text")
  gender: string;
}
