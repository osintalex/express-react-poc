import { Repository } from "typeorm";

import logger from "../configs/logging";
import User from "../models/user";
import { AppDataSource } from "./initialize";

/**
 * Class for operations that write to the database
 */
class UserWriteOperations {
  private userRepo: Repository<User>;

  /**
   * Constructor method to connect to User table in database.
   */
  constructor() {
    this.userRepo = AppDataSource.getRepository(User);
  }

  /**
   * Add a new user to the database
   * @returns true if user successfully created, otherwise false
   */
  public async addUser(): Promise<boolean> {
    const user = new User();
    user.firstName = "Alexander";
    user.lastName = "Darby";
    try {
      await this.userRepo.save(user);
      logger.info("User added");
      return true;
    } catch (errorMessage) {
      logger.error(`Error adding new user to database: ${errorMessage}`);
      return false;
    }
  }
}

const userWriteOperations: UserWriteOperations = new UserWriteOperations();
export default userWriteOperations;
