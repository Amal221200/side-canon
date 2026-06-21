import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((_, next) => {
  // return new Response("Temporarily unavailable", {
  //   status: 503,
  //   headers: {
  //     "Content-Type": "text/plain",
  //   },
  // });
  return next();
});
