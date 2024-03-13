import { createContext, useState } from "react";


export const ToggleContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
})

export const ToggleProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

  let value = { isCartOpen, setIsCartOpen };

    return (
        <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
    )
}

