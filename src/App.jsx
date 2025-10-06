import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/header";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";
function App() {
    return (
        
    
       <GlobalProvider>
        <Header/>
        <Balance/>
        <TransactionForm/>
        <h1>hello</h1>
        
       </GlobalProvider>
    
    )
}
 export default App
