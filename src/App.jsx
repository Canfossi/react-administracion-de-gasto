import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/header";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/incomeExpenses";

function App() {
    return (
        
    
       <GlobalProvider>
        <Header/>
        <IncomeExpenses/>
        <Balance/>
        <TransactionForm/>
        <TransactionList/>
        <h1>hello</h1>
        
       </GlobalProvider>
    
    )
}
 export default App
