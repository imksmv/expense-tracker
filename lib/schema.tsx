import { z } from "zod";
import categories from "../components/categories";

export const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must contain at least 3 characters." })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(0.01)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required." }),
  }),
});

export type ExpenseFormData = z.infer<typeof schema>;
