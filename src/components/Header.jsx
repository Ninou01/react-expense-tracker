import { TransactionsContext } from "../context/TransactionContext"
import { useContext } from "react"

const Header = ({ showAdd, handleShowAdd }) => {
    const { transactions } = useContext(TransactionsContext)

    const balance = transactions.reduce((acc, transaction) => {
      return transaction.type === "income"
        ? acc + transaction.amount
        : acc - transaction.amount;
    }, 0);

    return (
    <header>
        <div className="title">
          <h1>Expense Tracker</h1>
        </div>
        <div className="flex-box">
          <div className="balance-box">
            <span>Balance: ${balance}</span>
          </div>
          <div>
            <button className="btn" onClick={() => handleShowAdd()}>{showAdd ? "CLOSE" : "ADD"}</button>
          </div>
        </div>
    </header>
    )
}

export default Header