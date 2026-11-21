import { useState } from 'react'
import AddExpenseModal from './components/AddExpenseModal'
import Header from './components/Header'
import "./index.css"

function App() {
  const [openAddExpenseModal, setOpenAddExpenseModal] = useState<boolean>(false)

  return (
    <>
      <Header openModal={setOpenAddExpenseModal} />
      <AddExpenseModal open={openAddExpenseModal} setOpen={setOpenAddExpenseModal} />
    </>
  )
}

export default App
