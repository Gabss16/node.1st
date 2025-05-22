import React from "react";
import RegisterBranch from "../components/Branches/RegisterBranches";
import CustomTable from "../components/Branches/CustomTable";
import userDataBranches from "../components/Branches/Hooks/userDataBranches";
import { Toaster } from "react-hot-toast";

const BranchesPage = () => {
  const {
    name,
    setName,
    address,
    setAddress,
    telephone,
    setTelephone,
    schedule,
    setSchedule,
    branches,
    handleSubmit,
    deleteBranch,
    updateBranch,  // Asegúrate de recibir updateBranch aquí
    handleUpdate,
    id,
  } = userDataBranches();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Gestión de Sucursales</h1>

        {/* Formulario de registro de sucursales */}
        <RegisterBranch
          id={id}
          name={name}
          setName={setName}
          address={address}
          setAddress={setAddress}
          telephone={telephone}
          setTelephone={setTelephone}
          schedule={schedule}
          setSchedule={setSchedule}
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}  // Pasa handleUpdate si se va a editar una sucursal
        />

        {/* Tabla de sucursales */}
        <CustomTable
          columns={["Name", "Address", "Telephone", "Schedule", "Actions"]}
          data={branches.map((b) => ({
            name: b.name,
            address: b.address,
            telephone: b.telephone,
            schedule: b.schedule,
            _id: b._id,
          }))}
          onDelete={deleteBranch}
          onEdit={updateBranch}  // Aquí se pasa updateBranch cuando se va a editar
          headerTitle="Tabla de Sucursales"
          headerDescription="Visualiza y gestiona tus sucursales registradas"
        />
      </div>

      <Toaster toastOptions={{ duration: 1000 }} />
    </div>
  );
};

export default BranchesPage;
