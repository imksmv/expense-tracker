import { z } from "zod";

export const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must contain at least 3 characters." }),
  amount: z.number({ invalid_type_error: "Amount is required." }).min(1),
  category: z.enum(["groceries", "utilities", "entertainment"]),
});

export type FormData = z.infer<typeof schema>;
