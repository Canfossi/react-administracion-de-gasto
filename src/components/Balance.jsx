import { useContext } from "react"
import { useGlobalState } from "../context/GlobalState"

function Balance() {

    const data = useGlobalState()
    return (
       <><h1>Balance</h1><div>
            {JSON.stringify(data)}
        </div></>
    )
    
}
export default Balance