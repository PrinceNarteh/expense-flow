export type ICategory = food | transport | education | shopping | entertainment | bills | healths | other;

export type IExpense = {
  id?: string
  title: string
  category: ICategory | null
  amount: number | null
  date: Date | null
}

