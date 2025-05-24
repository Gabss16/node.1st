import React from "react";

const RegisterProvider = ({
  id,
  name,
  setName,
  cellphone,
  setCellphone,
  handleSubmit,
  handleUpdate,
}) => {
  return (
    <form
      onSubmit={id ? handleUpdate : handleSubmit}
      className="mb-6 bg-gray-50 p-6 rounded-md shadow-md"
    >
      <h2 className="text-xl font-semibold mb-4">
        {id ? "Editar Proveedor" : "Registrar Proveedor"}
      </h2>

      <div className="mb-4">
        <label htmlFor="name" className="block font-medium mb-1">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Nombre del proveedor"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="cellphone" className="block font-medium mb-1">
          Teléfono
        </label>
        <input
          type="text"
          id="cellphone"
          value={cellphone}
          onChange={(e) => setCellphone(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Teléfono del proveedor"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        {id ? "Actualizar" : "Registrar"}
      </button>
    </form>
  );
};

export default RegisterProvider;
