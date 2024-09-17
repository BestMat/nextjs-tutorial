import { NextResponse } from "next/server";
import fs from "fs";

export async function POST(request: Request) {
  const body: object = await request.json();
  const username: string = body.username;
  const password: string = body.password

  fs.readFile("./users.json", function(error: Error | null, data: any): void {
    const jsonData: JSON = JSON.parse(data);
    const newData: object = {
      [username]: password
    };

    const completeData: object = { ...jsonData, newData };
    fs.writeFile("./users.json", JSON.stringify(completeData), function(error) {
      if (error) NextResponse.json({ error: error })
      NextResponse.json({ code: 200 })
    });
  });
}
