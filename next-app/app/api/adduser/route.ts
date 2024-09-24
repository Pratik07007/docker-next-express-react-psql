import { db } from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  await db.user.create({
    data: {
      email: "s.dhimal006@gmail.com",
      name: "Pratik",
    },
  });
  return NextResponse.json({ msg: "User Created Succesfully" });
}
