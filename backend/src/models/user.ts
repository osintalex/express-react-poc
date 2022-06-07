import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

/**
 * Class to define a `User` table in the database.
 *
 * @privateRemarks
 *
 * The attributes have `!` after them since that way I don't
 * have to disable strict type checking.
 */
@Entity()
class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;
}

export default User;
