import { Response } from "express";

async function exitsOrNot(
  value: any,
  msg: string,
  code: number,
  response: Response
) {
  if (value) {
    return response.status(code).json(msg);
  }
}

export { exitsOrNot };
