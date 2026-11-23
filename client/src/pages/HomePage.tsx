import AddExpenseModal from "@/components/AddExpenseModal";
import Card from "@/components/Card";
import ExpenseList from "@/components/ExpenseList";
import Header from "@/components/Header";
import { useGlobalState } from "@/hooks/useGlobalState";
import "@/index.css";

function HomePage() {
  const { expenses } = useGlobalState();

  return (
    <>
      <Header />
      <section className="max-w-7xl m-auto px-6 py-8">
        {/* StatsCards */}
        <div className="grid grid-cols-3 mt-8 m-auto gap-4">
          <div className="flex flex-col gap-4">
            <Card title="Spending Breakdown">Expense Chart</Card>
            <Card title="Top Categories">TopCategories</Card>
          </div>
          <Card className="col-span-2" title="Recent Transactions">
            {expenses.length ? (
              <>
                <ExpenseList expenses={expenses} />
              </>
            ) : (
              <article className="text-center text-gray-500">
                <h6 className="font-semibold">No Expenses Yet</h6>
                <p className="text-sm">
                  Add your first expenses to get started
                </p>
              </article>
            )}
          </Card>
        </div>
      </section>
      <AddExpenseModal />
    </>
  );
}

export default HomePage;
