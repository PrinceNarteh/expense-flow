import AddExpenseModal from '@/components/AddExpenseModal'
import Header from '@/components/Header'
import "@/index.css"
import type { IExpense } from '@/types/expense'
import { useState } from 'react'

function HomePage() {
  const [expenses, setExpenses] = useState<IExpense[]>([])
  const [openAddExpenseModal, setOpenAddExpenseModal] = useState<boolean>(false)

  return (
    <>
      <Header openModal={setOpenAddExpenseModal} />
      <AddExpenseModal
        expenses={expenses}
        setExpenses={setExpenses}
        open={openAddExpenseModal}
        setOpen={setOpenAddExpenseModal}
      />
    </>
  )
}

export default HomePage
