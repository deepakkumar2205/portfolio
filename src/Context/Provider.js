import { useState } from "react";
import Context from "./Context";


export default function Provider (props){
    const [theme, setTheme] = useState('light');
    

    return (
        <Context.Provider value={{theme, setTheme }}>
            {props.children}
        </Context.Provider>
    )
}