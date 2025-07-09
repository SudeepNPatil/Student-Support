import React, { useState } from "react";
import { createContext } from "react";


export const LoginContext = createContext();


export function LoginContextProvider({ children }) {

    const [isLogin, setisLogin] = useState(false);

    return (
        <LoginContext.Provider value={{ isLogin, setisLogin }}>
            {children}
        </LoginContext.Provider>
    )

}

