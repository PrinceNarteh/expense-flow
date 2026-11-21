import { categories } from "@/constants/expense"
import { expenseSchema, type CreateExpenseSchema } from "@/schema/expense"
import { Button } from "@/shared/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/shared/ui/dialog"
import { FieldGroup } from "@/shared/ui/field"
import { InputField } from "@/shared/ui/input-field"
import { SelectField } from "@/shared/ui/select-field"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

interface AddExpenseModalProps {
  open: boolean,
  setOpen: (open: boolean) => void
}

const categoryOptions = categories.map(c => ({
  label: c, value: c
}))

const AddExpenseModal = ({ open, setOpen }: AddExpenseModalProps) => {
  const form = useForm<CreateExpenseSchema>({
    resolver: zodResolver(expenseSchema),
    defaultValues: {
      title: "",
      amount: 0,
      category: "",
      date: new Date(),
    }
  })


  console.log(form.watch())

  const handleSubmit = async (data: CreateExpenseSchema) => {
    console.log(data)
  }

  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-eastern-blue text-2xl font-bold">Add Expense</DialogTitle>
          <DialogDescription className="-mt-2.5">Add  a new Expense</DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FieldGroup>
            <InputField control={form.control} name="title" label="Title" />
            <FieldGroup className="flex flex-row gap-2">
              <InputField control={form.control} name="amount" type="number" label="Amount" placeholder="0.00" />
              <InputField control={form.control} name="date" type="date" label="Date" />
            </FieldGroup>
            <SelectField control={form.control} name="category" label="Category" options={categoryOptions} />
            <Button type="submit" className="bg-eastern-blue cursor-pointer">Add Expense</Button>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog >
  )
}

export default AddExpenseModal
