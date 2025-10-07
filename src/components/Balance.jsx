import { useContext } from "react"
import { useGlobalState } from "../context/GlobalState"

function Balance() {

    const data = useGlobalState()
    return (
       <><h1>Balance</h1><div>
        
        </div></>
    )
    
}
export default Balance