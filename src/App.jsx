import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/header";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
function App() {
    return (
        
    
       <GlobalProvider>
        <Header/>
        <Balance/>
        <TransactionForm/>
        <TransactionList/>
        <h1>hello</h1>
        
       </GlobalProvider>
    
    )
}
 export default App
