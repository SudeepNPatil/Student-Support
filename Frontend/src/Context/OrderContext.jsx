import { createContext, useState } from "react";


export const OrderContext = createContext();

function OrderContextProvider({ children }) {

    const [Order, setOrder] = useState(null);


}