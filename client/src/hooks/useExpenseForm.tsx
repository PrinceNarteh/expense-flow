import { expenseSchema, type IExpense } from "@/schema/expense";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const defaultValues: IExpense = {
  title: "",
  amount: 0,
  category: "Bills",
  date: new Date(),
};

export const useExpenseForm = (selectedExpense?: IExpense | null) => {
  const form = useForm<IExpense>({
    resolver: zodResolver(expenseSchema),
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
