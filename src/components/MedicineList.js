import React, { useState, useEffect, useContext} from "react";
import axios from "axios";
import ProductContext from "./source/product-context";

const MedicineList = () => {
  const [list, setList] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const ctx = useContext(ProductContext);

  useEffect(() => {
    axios
      .get("https://crudcrud.com/api/9987d008a3404bb4999d85021da6e789/products")
      .then((res) => {
        setList((prevState) => res.data);
        console.log(res.data);
        console.log(list);
      });
  }, [ctx.name]);

  const cartSubmitHandler = async(list1) => {
    const cartObj = {
      items: list1,
      number: quantity,
    };

    const response = await axios.post(
      "https://crudcrud.com/api/9987d008a3404bb4999d85021da6e789/productsCarts",
      cartObj
    );
    console.log(response.data);
  };
  const quantityChangeHandler = (event) => {
    setQuantity(event.target.value);
  }
 
  return (
    <React.Fragment>
      {list.map((list1) => (
        <li key={Math.random().toString()}>
          {list1.med} - {list1.desc} - {list1.price} -{" "}
          {
            <div>
              <label>Quantity</label>
              <input type="text" onChange={quantityChangeHandler}></input>

              <button
                type="button"
                onClick={() => {
                  cartSubmitHandler(list1.med);
                }}
              >
                Add to Cart
              </button>
            </div>
          }
        </li>
      ))}
    </React.Fragment>
  );
};

export default MedicineList;
