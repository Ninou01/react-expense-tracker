import { useContext } from "react";
import { TransactionsContext } from "../context/TransactionContext";

const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(TransactionsContext)

    return (
        <li className={`transaction ${transaction.type}`}>
            <span className="delete"
            onClick={() => deleteTransaction(transaction.id)}>x</span>
            <div>
                <span className="description">{transaction.description}</span>
                <span className="amount">{transaction.amount}$</span>
            </div>
        </li>
    )
}

export default Transaction
