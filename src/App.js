import React from "react";
import MedicineForm from "./components/MedicineForms";
import MedicineList from "./components/MedicineList";
import Cart from "./components/Cart";
import ContextProvider from "./components/source/ContextProvider";

function App(props) {
  return (
    <ContextProvider>
      <Cart>{props.children}</Cart>
      <MedicineForm/>
      <MedicineList/>
      </ContextProvider>
  );
}

export default App;
