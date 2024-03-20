import ReactDOM from "react-dom";
import Productos from "./components/Productos";
import productosData from "./data/ProductosData";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Header />
    <Productos productosData={productosData} />
  </>
);
