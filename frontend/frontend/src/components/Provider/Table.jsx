import React from "react";
import "../CustomTable.css";
const CustomTableProviders = ({ columns, data, onDelete, onEdit }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="py-2 px-4 border-b border-gray-300 text-left bg-gray-100"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-4">
                No hay proveedores registrados
              </td>
            </tr>
          ) : (
            data.map(({ _id, name, cellphone }) => (
              <tr key={_id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b border-gray-300">{name}</td>
                <td className="py-2 px-4 border-b border-gray-300">{cellphone}</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <button
                    onClick={() => onEdit({ _id, name, cellphone })}
                    className="mr-2 bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(_id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTableProviders;
