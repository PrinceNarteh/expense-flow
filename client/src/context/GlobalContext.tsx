import type { IExpense } from "@/types/expense";
import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

interface IGlobalState {
  openModal: boolean;
  expenses: IExpense[];
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  addExpense: (expense: IExpense) => void;
  removeExpense: (id: string) => void;
}

export const GlobalState = createContext<IGlobalState>({
  expenses: [],
  openModal: false,
  setOpenModal: () => {},
  addExpense: () => {},
  removeExpense: () => {},
});

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [expenses, setExpenses] = useState<IExpense[]>([]);

  const addExpense = (expense: IExpense) => {
    setExpenses([...expenses, expense]);
  };

  const removeExpense = (id: string) => {
    setExpenses(expenses.filter((e) => e.id != id));
  };

  return (
    <GlobalState.Provider
      value={{ openModal, expenses, addExpense, removeExpense, setOpenModal }}
    >
      {children}
    </GlobalState.Provider>
  );
};
