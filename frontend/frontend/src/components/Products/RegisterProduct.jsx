import React from "react";


const RegisterProduct = ({
  id,
  name,
  setName,
  description,
  setDescription,
  price,
  setPrice,
  stock,
  setStock,
  handleSubmit,
  handleUpdate,
}) => {
  return (
    <form
      onSubmit={id ? handleUpdate : handleSubmit}
      className="space-y-4 mb-8"
    >
      <div>
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
          Nombre del Producto
        </label>
        <input
          id="name"
          type="text"
          placeholder="Nombre"
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-gray-700 font-semibold mb-1">
          Descripción
        </label>
        <input
          id="description"
          type="text"
          placeholder="Descripción"
          value={description || ""}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div>
        <label htmlFor="price" className="block text-gray-700 font-semibold mb-1">
          Precio
        </label>
        <input
          id="price"
          type="number"
          min="0"
          placeholder="Precio"
          value={price || ""}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>

      <div>
        <label htmlFor="stock" className="block text-gray-700 font-semibold mb-1">
          Stock
        </label>
        <input
          id="stock"
          type="number"
          min="0"
          placeholder="Stock"
          value={stock || ""}
          onChange={(e) => setStock(Number(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>

      <button
        type="submit"
        className={`${
          id ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-500 hover:bg-blue-600"
        } text-white px-6 py-2 rounded-md`}
      >
        {id ? "Actualizar Producto" : "Registrar Producto"}
      </button>
    </form>
  );
};

export default RegisterProduct;
