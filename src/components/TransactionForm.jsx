import { useState } from "react"
import  {useGlobalState} from '../context/GlobalState'

function TransactionForm(){

    const {addTransacion}= useGlobalState()

    const[descripcion,setDescripcion ]= useState()

    const [amount,SetAmount] = useState(0)

    const onSubmit = (e)=>{
        e.preventDefault();
        addTransacion({
            id: 1,
            descripcion,
            amount
        })
        
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Entrar en la descripcion"
                onChange = {(e) => setDescripcion(e.target.value)} />

                <input type="number" placeholder="00.00" step="0.01"
                onChange = {(e) => SetAmount(e.target.value)} />
                <button>
                    Agrega una transacion
                </button>

            </form>

        </div>
    )
}
export default TransactionForm