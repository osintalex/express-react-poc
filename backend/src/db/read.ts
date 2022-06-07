import { Repository } from "typeorm";

import User from "../models/user";
import { AppDataSource } from "./initialize";

/**
 * Class for operations that read from the database
 */
class UserReadOperations {
  private userRepo: Repository<User>;

  /**
   * Constructor method to connect to User table in database.
   */
  constructor() {
    this.userRepo = AppDataSource.getRepository(User);
  }

  /**
   * Get all users.
   * @returns Everyone!
   */
  public async getAllUsers(): Promise<User[]> {
    return this.userRepo.find();
  }
}

const userReadOperations: UserReadOperations = new UserReadOperations();
export default userReadOperations;
