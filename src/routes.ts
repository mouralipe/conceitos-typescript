import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function test(req: Request, res: Response) {
  const user = createUser({
    email: "Felipe",
    password: "21321",
    techs: [
      "Node",
      "React",
      "React Native",
      { title: "Javascript", experience: 100 },
    ],
  });

  return res.json({ test: "TESTE" });
}
