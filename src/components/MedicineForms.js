import axios from "axios";
import React, {useRef, useContext} from "react";
import {} from "react-bootstrap";
import ProductContext from "./source/product-context";

const MedicineForm = () => {
    const medicineNameRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const ctx = useContext(ProductContext)
    const submitHandler = async(event) => {
        event.preventDefault();
        const obj = {
            med: medicineNameRef.current.value,
            desc: descriptionRef.current.value,
            price: priceRef.current.value
        }
        const response = await axios.post('https://crudcrud.com/api/9987d008a3404bb4999d85021da6e789/products', obj)
        ctx.addItem(response.data)
        console.log(ctx.name)
        
    }
  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <label>Medicine Name:</label>
        <input type="text" ref={medicineNameRef}/>
        <label>Description:</label>
        <input type="text" ref={descriptionRef}/>
        <label>Price:</label>
        <input type="number" ref={priceRef}/>
        <button type="submit">Add product</button>
      </form>
    </React.Fragment>
  );
};

export default MedicineForm;
