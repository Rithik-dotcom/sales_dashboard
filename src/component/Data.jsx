import React, {  createContext, useContext } from 'react'
import App from '../App';


const MyNumber = createContext();


const Data = () => {

    
    return (
        <div>
            <MyNumber.Provider value={"2"}>
                <App/>
            </MyNumber.Provider>
        </div>
    )
}

export { MyNumber };
export default Data;
