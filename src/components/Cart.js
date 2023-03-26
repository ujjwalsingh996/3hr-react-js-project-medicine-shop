import React, { useState, useEffect } from "react";
import { Button, Offcanvas, Toast } from "react-bootstrap";
import axios from "axios";

const Cart = () => {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get(
        "https://crudcrud.com/api/9987d008a3404bb4999d85021da6e789/productsCarts"
      )
      .then((res) => {
        console.log(res);
        setCart(res.data);
      });
  }, [show]);
  const removeItemHandler = (id) => {
    setCart([]);
    for(let i = 0; i< cart.length; i++) 
    {   
        let id = cart[i]._id
        axios.delete(`https://crudcrud.com/api/9987d008a3404bb4999d85021da6e789/productsCarts/${id}`)
    }
    
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleShow}>
        Cart ({cart.length})
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CART</Offcanvas.Title>
          <Offcanvas.Body>
            {cart.map((cart) => (
              <Toast key={cart._id}>
                <Toast.Body>
                  <strong>
                    {cart.items} - Quantity - {cart.number}
                  </strong>{" "}
                </Toast.Body>
              </Toast>
            ))}
            <Button
              onClick={() =>
                removeItemHandler(cart._id)
              }
              className="content-right"
            >
              Bill
            </Button>
          </Offcanvas.Body>
        </Offcanvas.Header>
      </Offcanvas>
    </React.Fragment>
  );
};

export default Cart;
