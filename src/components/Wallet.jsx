const Wallet = ({ income, expense }) => {
    return (
    <div className="wallet">
        <div className="expense">
            <p>expense</p>
            <span className="money expense">${expense}</span>
        </div>
        <div className="income">
            <p>income</p>
            <span className="money income">${income}</span>
        </div>
    </div>
    )
}

export default Wallet