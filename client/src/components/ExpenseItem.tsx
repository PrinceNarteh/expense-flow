import { CATEGORY_ICON } from "@/constants/expense";
import { useExpenseForm } from "@/hooks/useExpenseForm";
import { useGlobalState } from "@/hooks/useGlobalState";
import type { IExpense } from "@/schema/expense";
import { SquarePen, Trash } from "lucide-react";
import { useEffect, useState } from "react";

interface ExpenseItemProps {
  expense: IExpense;
}

const ExpenseItem = ({ expense }: ExpenseItemProps) => {
  const { openModal, setOpenModal, removeExpense } = useGlobalState();
  const [selectedExpense, setSelectedExpense] = useState<IExpense | null>(null);
  const { form } = useExpenseForm(selectedExpense);

  const handleEdit = (expense: IExpense) => {
    setSelectedExpense(expense);
    setOpenModal(true);
  };

  useEffect(() => {
    if (openModal && selectedExpense) {
      form.reset({});
    }
  }, [openModal, selectedExpense]);

  return (
    <article className="w-full flex justify-between items-center rounded-md border p-4 hover:shadow-md hover:ml-0.5 group transition-all duration-300">
      <div className="flex gap-2 items-center">
        <p className="size-10 bg-athens-gray rounded-xl flex justify-center items-center text-lg">
          {expense.category ? CATEGORY_ICON[expense.category] : null}
        </p>
        <div>
          <h3 className="font-medium truncate">{expense.title}</h3>
          <p className="text-sm text-storm-gray capitalize">
            {expense.category} - {expense.date.toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="flex gap-8">
        <p className="font-semibold tabular-nums text-lg">
          ${expense.amount.toFixed(2)}
        </p>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100">
          <button
            className="cursor-pointer"
            onClick={() => handleEdit(expense)}
          >
            <SquarePen className="size-4 text-storm-gray" />
          </button>
          <button
            className="cursor-pointer"
            onClick={() => removeExpense(expense.id)}
          >
            <Trash className="size-4 text-red-500" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ExpenseItem;
