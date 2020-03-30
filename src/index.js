import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PropTypes from "prop-types";

// import App from "./App";
import * as serviceWorker from "./serviceWorker";

const products = [
  { category: "Electronics ", price: " 700dt", name: "television" },
  { category: "Clothes ", price: " 100dt", name: "shoes" },
  { category: "Electronics ", price: " 400dt", name: "x-box" },
  { category: "Clothes ", price: " 150dt", name: "jacket" }
];
const ProductTable = props => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      {props.children}
      <table
        style={{
          textAlign: "center",
          border: props.border,
          height: 300,
          width: 300,
          backgroundColor: props.backgroundColor,
          color: props.color
        }}
      >
        <tbody>
          <tr>
            <td>Name</td>
            <td>Category</td>
            <td>Price</td>
          </tr>
          {props.table.map((elm, index) => (
            <tr key={index}>
              <td>{elm.name}</td>
              <td>{elm.category}</td>
              <td>{elm.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ProductTable.propTypes = {
  Table: PropTypes.array,
  category: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string
};

ReactDOM.render(
  <React.StrictMode>
    <ProductTable
      table={products}
      color="#f8234a"
      backgroundColor="rgba(6, 12, 34, 0.8)"
      border=" solid 2px black"
    >
      <h1 style={{ color: "#f8234a", fontWeight: 300, fontSize: 40 }}>
        ProductTable
      </h1>
    </ProductTable>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
