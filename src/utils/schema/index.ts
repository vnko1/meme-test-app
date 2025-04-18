import * as z from "zod";

export const schema = z.object({
  title: z.string().min(3).max(100),
  likes: z
    .string()
    .regex(/^\d+$/)
    .transform((val) => parseInt(val, 10))
    .pipe(z.number().int().gte(0).lte(100))
    .transform((val) => val.toString()),
  memeUrl: z.string().url(),
});
