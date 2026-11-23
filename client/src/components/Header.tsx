import { useGlobalState } from "@/hooks/useGlobalState";
import { Plus, Wallet } from "lucide-react";

const Header = () => {
  const { setOpenModal } = useGlobalState();
  return (
    <header className="border-b border-athens-gray flex justify-between py-4 px-6 max-w-7xl m-auto">
      <hgroup className="flex items-center gap-3">
        <div className="size-9 bg-eastern-blue flex justify-center items-center rounded-lg">
          <Wallet className="size-4 text-white" />
        </div>
        <h3 className="text-lg font-bold tracking-tight">Header</h3>
      </hgroup>
      <button
        onClick={() => setOpenModal(true)}
        className="bg-eastern-blue text-white flex items-center shadow-lg font-medium text-sm rounded-md gap-2 px-8 py-3 cursor-pointer"
      >
        <Plus />
        Add Expense
      </button>
    </header>
  );
};

export default Header;
