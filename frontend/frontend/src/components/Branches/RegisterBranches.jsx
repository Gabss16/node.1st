import React from "react";
import "./RegisterBranches.css"

const RegisterBranch = ({
  id,
  name,
  setName,
  address,
  setAddress,
  telephone,
  setTelephone,
  schedule,
  setSchedule,
  handleSubmit,
  handleUpdate,
}) => {
  return (
    <form
      onSubmit={id ? handleUpdate : handleSubmit}  // Condicional para determinar si es para actualizar o registrar
      className="space-y-4 mb-8"
    >
      <div>
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
          Nombre de la Sucursal
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
        <label htmlFor="address" className="block text-gray-700 font-semibold mb-1">
          Dirección
        </label>
        <input
          id="address"
          type="text"
          placeholder="Dirección"
          value={address || ""}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>

      <div>
        <label htmlFor="telephone" className="block text-gray-700 font-semibold mb-1">
          Teléfono
        </label>
        <input
          id="telephone"
          type="text"
          placeholder="Teléfono"
          value={telephone || ""}
          onChange={(e) => setTelephone(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div>
        <label htmlFor="schedule" className="block text-gray-700 font-semibold mb-1">
          Horario
        </label>
        <input
          id="schedule"
          type="text"
          placeholder="Horario"
          value={schedule || ""}
          onChange={(e) => setSchedule(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <button
        type="submit"
        className={`${
          id ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-500 hover:bg-blue-600"
        } text-white px-6 py-2 rounded-md`}
      >
        {id ? "Actualizar Sucursal" : "Registrar Sucursal"}  {/* Cambia el texto según si es actualización o registro */}
      </button>
    </form>
  );
};

export default RegisterBranch;
