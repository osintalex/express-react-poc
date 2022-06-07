import { Router, Request, Response } from "express";

import userReadOperations from "../db/read";
import userWriteOperations from "../db/write";
import User from "../models/user";

const example: Router = Router();

example.get("/test", (_request: Request, response: Response): void => {
  response.json({ hello: "world" });
});

example.get("/user", async (_request: Request, response: Response): Promise<void> => {
  const userData: User[] = await userReadOperations.getAllUsers();
  response.json(userData);
});

example.get("/add-user", async (_request: Request, response: Response): Promise<void> => {
  const isUserAdded: boolean = await userWriteOperations.addUser();
  const responseMessage: string = isUserAdded ? "User created" : "Sorry, error creating new user";
  response.json({ response: responseMessage });
});

export default example;
