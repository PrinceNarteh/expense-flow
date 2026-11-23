import { categories } from "@/constants/expense";
import { z } from "zod";

export const createExpenseSchema = z.object({
  title: z.string().min(2, { error: "Title is requied" }),
  category: z.enum(categories, { error: "Please select category" }),
  amount: z.number({ error: "Please enter amount" }),
  date: z.date({ error: "Please pick a date." }),
});

export type CreateExpenseSchema = z.infer<typeof createExpenseSchema>;
