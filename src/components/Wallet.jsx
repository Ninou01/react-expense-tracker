import { useContext } from "react";
import { TransactionsContext } from "../context/TransactionContext";

const Wallet = () => {
    const { transactions } = useContext(TransactionsContext)

    const { incomeTotal, expenseTotal } = transactions.reduce(
        (totals, transaction) => {
            if (transaction.type === "income") {
                totals.incomeTotal += transaction.amount;
            } else if (transaction.type === "expense") {
                totals.expenseTotal += transaction.amount;
            }
            return totals;
        },
        { incomeTotal: 0, expenseTotal: 0 }
    );
    
    return (
    <div className="wallet">
        <div className="expense">
            <p>expense</p>
            <span className="money expense">${expenseTotal}</span>
        </div>
        <div className="income">
            <p>income</p>
            <span className="money income">${incomeTotal}</span>
        </div>
    </div>
    )
}

export default Wallet