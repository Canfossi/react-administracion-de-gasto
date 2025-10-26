import { useGlobalState } from "../context/GlobalState"


function IncomeExpenses(){

    const {transactions} = useGlobalState()
    
    const amounts = transactions.map(transaction=>transaction.amount)
    console.log(amounts)

    const income = amounts
                    .filter(item => item > 0)
                    .reduce((acc, item)=> (acc+=item),0)

    const  Expennse= amounts.filter(item => item < 0 )
                            .reduce((acc,item)=>acc += item, 0 )* -1
                            

                   

    return(
        <>
        <div>
            <h4>IncomeExpenses</h4>
            <p>{income}</p>    
        </div>
        <div>
            <h4>Expennse</h4>
            <p>{Expennse}</p>
        </div>
        </>
        
    )
}
export default IncomeExpenses