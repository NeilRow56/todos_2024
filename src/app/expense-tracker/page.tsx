import ExpenseInputForm from '@/components/shared/ExpenseTracker'
import { db } from '@/lib/db'

const ExpenseTracker = async () => {
  const expenses = await db.expense.findMany()
  return (
    <div className="mt-24 h-screen w-full bg-gray-100">
      <div className="mx-auto max-w-6xl text-center">
        <h1>Expense Tracker</h1>
        <ExpenseInputForm />
        <h2 className="mt-8">Expenses Listed</h2>
        <ul>
          <li>
            {expenses.map((expense) => (
              <div
                className="mx-auto mt-2 flex max-w-sm flex-row gap-3 text-center"
                key={expense.id}
              >
                <p>{expense.name}</p>
                <p>{expense.amount}</p>
              </div>
            ))}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ExpenseTracker
