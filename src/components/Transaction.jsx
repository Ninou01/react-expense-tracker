

const Transaction = ({ transaction, onDelete }) => {
    return (
        <li className={`transaction ${transaction.type}`}>
            <span className="delete"
            onClick={() => onDelete(transaction.id)}>x</span>
            <div>
                <span className="description">{transaction.description}</span>
                <span className="amount">{transaction.amount}$</span>
            </div>
        </li>
    )
}

export default Transaction
