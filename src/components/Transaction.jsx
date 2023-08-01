

const Transaction = ({ transaction }) => {
    return (
        <li className={`transaction ${transaction.type}`}>
            <span className="description">{transaction.description}</span>
            <span className="amount">{transaction.amount}$</span>
        </li>
    )
}

export default Transaction
