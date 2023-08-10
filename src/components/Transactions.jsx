import Transaction from "./Transaction"

const Transactions = ({ transactions, queryHandler, onDelete }) => {
    return (
        <div className="transactions">
            <h3 className="title"> Transactions </h3>
            <input type="text" onChange={queryHandler} className="search-bar" placeholder="Search"/>
            <ul className="transactions-list">
                {transactions.map((transaction, i) => <Transaction key={i} transaction={transaction} onDelete={onDelete}/>)}
            </ul>
        </div>
    )
}

export default Transactions
