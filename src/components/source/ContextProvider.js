import React, { useState } from "react"
import ProductContext from "./product-context"

const ContextProvider = (props) => {
    const [item, setItem] = useState([]);
    const addItemHandler = (item) => {
        setItem((prevState) => [...prevState, item])
    }

    const removeItemHander = (id) => {

    }
    const Context1 = {
        name: item,
        description: '',
        price: '',
        addItem: addItemHandler,
        removeItem: removeItemHander
    }
    return <ProductContext.Provider value={Context1}>{props.children}</ProductContext.Provider>
}

export default ContextProvider;