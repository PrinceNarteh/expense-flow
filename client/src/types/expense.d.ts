import type { ICategory } from "@/constants/expense";

export type IExpense = {
  id: string;
  title: string;
  amount: number;
  category: ICategory;
  date: Date;
};
