import React from "react";
import RegisterProvider from "../components/Provider/RegisterProvider";
import CustomTableProviders from "../components/Provider/Table";
import userDataProviders from "../components/Provider/hooks/useDataProviders";
import { Toaster } from "react-hot-toast";

const ProvidersPage = () => {
  const {
    name,
    setName,
    cellphone,
    setCellphone,
    providers,
    handleSubmit,
    deleteProvider,
    updateProvider,
    handleUpdate,
    id,
  } = userDataProviders();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Gestión de Proveedores
        </h1>

        <RegisterProvider
          id={id}
          name={name}
          setName={setName}
          cellphone={cellphone}
          setCellphone={setCellphone}
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}
        />

        <CustomTableProviders
          columns={["Nombre", "Teléfono", "Acciones"]}
          data={providers.map((p) => ({
            _id: p._id,
            name: p.name,
            cellphone: p.cellphone,
          }))}
          onDelete={deleteProvider}
          onEdit={updateProvider}
        />
      </div>

      <Toaster toastOptions={{ duration: 1000 }} />
    </div>
  );
};

export default ProvidersPage;
