import { CATEGORIES } from "@/constants/expense";
import { useExpenseForm } from "@/hooks/useExpenseForm";
import { useGlobalState } from "@/hooks/useGlobalState";
import type { IExpense } from "@/schema/expense";
import { Button } from "@/shared/ui/button";
import { DatePicker } from "@/shared/ui/date-picker";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import { FieldGroup } from "@/shared/ui/field";
import { InputField } from "@/shared/ui/input-field";
import { SelectField } from "@/shared/ui/select-field";

const AddExpenseModal = () => {
  const { expenses, addExpense, openModal, setOpenModal } = useGlobalState();
  const { form } = useExpenseForm();

  const handleSubmit = async (data: IExpense) => {
    const newExpense: IExpense = {
      id: expenses.length.toString(),
      ...data,
    };
    addExpense(newExpense);
    form.reset();
    setOpenModal(false);
  };

  return (
    <Dialog open={openModal} onOpenChange={() => setOpenModal(false)}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-eastern-blue text-2xl font-bold">
            Add Expense
          </DialogTitle>
          <DialogDescription className="-mt-2.5">
            Add a new Expense
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FieldGroup>
            <InputField control={form.control} name="title" label="Title" />
            <FieldGroup className="flex flex-row gap-2">
              <InputField
                control={form.control}
                name="amount"
                type="number"
                label="Amount"
                placeholder="0.00"
              />
              <DatePicker
                control={form.control}
                label="Pick a date"
                name="date"
              />
            </FieldGroup>
            <SelectField
              control={form.control}
              name="category"
              label="Category"
              options={CATEGORIES}
            />
            <Button type="submit" className="bg-eastern-blue cursor-pointer">
              Add Expense
            </Button>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddExpenseModal;
