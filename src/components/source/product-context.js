import React from "react";

const ProductContext = React.createContext({
    name: '',
    description: '',
    price: '',
    addItem: (item) => {},
    removeItem: (id) => {}
})
export default ProductContext;