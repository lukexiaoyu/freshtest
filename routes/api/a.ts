import { HandlerContext } from "$fresh/server.ts";
import {a} from "kl/two.js"
// Jokes courtesy of https://punsandoneliners.com/randomness/programmer-jokes/


export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  
  return new Response(a);
};
