import express, { Response, Request } from "express";
import { db } from "./db";

const PORT = process.env.PORT || 4000;

const app = express();

app.get("/", async (req: Request, res: Response) => {
  await db.user.create({
    data: {
      email: "s.dhimal006@gmail.com",
      name: "Pratik Dhimal",
    },
  });
  console.log(process.env.ENV3);
  res.json({ msg: "Healthy Endpoint" });
});

app.listen(PORT, () => console.log(`Server Runnign on port ${PORT}`));
