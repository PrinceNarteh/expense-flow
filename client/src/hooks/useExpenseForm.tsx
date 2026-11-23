import {
  createExpenseSchema,
  type CreateExpenseSchema,
} from "@/schema/expense";
import type { IExpense } from "@/types/expense";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const defaultValues: CreateExpenseSchema = {
  title: "",
  amount: 0,
  category: "Bills",
  date: new Date(),
};

export const useExpenseForm = (selectedExpense?: IExpense | null) => {
  const form = useForm<CreateExpenseSchema>({
    resolver: zodResolver(createExpenseSchema),
    defaultValues,
    values: selectedExpense
      ? {
          ...selectedExpense,
          date: new Date(selectedExpense.date),
        }
      : undefined,
  });

  return { form };
};
