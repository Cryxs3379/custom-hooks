import { useState } from "react"

 export const useCounter = (inicialValue=10) => {
const [counter, setcounter] = useState(inicialValue)

const increment = (value = 1) => {
setcounter((current) => current + value);
}
const decrement = (value = 1) => {
    if (counter === 0) return
    setcounter((current) => current - value);
    }
    const reset = () => {
        setcounter(inicialValue);
        }



return {
counter,
increment,
decrement,
reset,
}


}