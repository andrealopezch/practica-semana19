import React from "react";

const Producto = ({ producto }) => {
  const precio = producto.precio;

  return (
    <div className="card">
      <img
        src={producto.foto}
        className="card-img-top"
        alt={producto.nombreProducto}
        style={{ maxHeight: "350px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{producto.nombreProducto}</h5>
        <p className="card-text">{producto.descripcion}</p>
        <p className="card-text">Precio: ${precio.toFixed(2)}</p>
        <button className="btn btn-primary">Agregar al carrito</button>
      </div>
    </div>
  );
};

const Productos = ({ productosData }) => {
  return (
    <div className="container mt-3 mb-3">
      <h1 className="mb-4">Productos</h1>
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {productosData.map((producto) => (
          <div className="col" key={producto.id}>
            <Producto producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
