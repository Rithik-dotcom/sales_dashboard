import React from 'react'
import { MyNumber } from "./Data";
const Recieve = () => {
    return (
        <div>
            <MyNumber.Consumer>{(MyNumber) => {
                console.log(MyNumber)
                return <h1>hello {MyNumber}</h1>;
            }
            }
            </MyNumber.Consumer>

        </div>
    )
}

export default Recieve