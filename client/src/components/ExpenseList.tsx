import type { IExpense } from "@/schema/expense";
import ExpenseItem from "./ExpenseItem";

interface ExpenseListProps {
  expenses: IExpense[];
}
const ExpenseList = ({ expenses }: ExpenseListProps) => {
  return (
    <section className="flex flex-col gap-3">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </section>
  );
};

export default ExpenseList;
