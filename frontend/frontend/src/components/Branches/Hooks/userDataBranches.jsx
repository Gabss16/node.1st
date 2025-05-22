import React, { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

const userDataBranches = () => {
  const ApiBranches = "http://localhost:4000/api/branches";

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [schedule, setSchedule] = useState("");
  const [errorBranch, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [branches, setBranches] = useState([]);

  // 👉 Limpiar los datos del formulario
  const cleanData = () => {
    setName("");
    setAddress("");
    setTelephone("");
    setSchedule("");
    setId("");
    setError(null);
    setSuccess(null);
  };

  // 👉 Registrar nueva sucursal
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !address || !telephone || !schedule) {
      setError("Todos los campos son obligatorios");
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {
      const newBranch = { name, address, telephone, schedule };
      console.log(newBranch, "datos de la nueva sucursal");

      const response = await fetch(ApiBranches, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBranch),
      });

      if (!response.ok) {
        throw new Error("Hubo un error al registrar la sucursal");
      }

      const data = await response.json();
      toast.success("Sucursal registrada");
      setSuccess("Sucursal registrada correctamente");
      cleanData();  // Limpiar los campos después de registrar
      fetchData();
    } catch (error) {
      setError(error.message);
      console.error("Error al registrar la sucursal:", error);
      toast.error("Ocurrió un error al registrar la sucursal");
    } finally {
      setLoading(false);
    }
  };

  // 👉 Obtener sucursales
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(ApiBranches);
      if (!response.ok) throw new Error("Error al obtener las sucursales");
      const data = await response.json();
      setBranches(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 👉 Eliminar sucursal
  const deleteBranch = async (id) => {
    try {
      const response = await fetch(`${ApiBranches}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar la sucursal");
      }

      toast.success("Sucursal eliminada");
      fetchData(); // Refresca la lista de sucursales
    } catch (error) {
      console.error("Error deleting branch:", error);
      toast.error("Error al eliminar la sucursal");
    }
  };

  // 👉 Llenar formulario para edición
  const updateBranch = (dataBranch) => {
    setId(dataBranch._id);
    setName(dataBranch.name);
    setAddress(dataBranch.address);
    setTelephone(dataBranch.telephone);
    setSchedule(dataBranch.schedule);
    setError(null);
    setSuccess(null);
  };

  // 👉 Guardar cambios de edición
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedBranch = { name, address, telephone, schedule };

      const response = await fetch(`${ApiBranches}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBranch),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar la sucursal");
      }

      toast.success("Sucursal actualizada");
      setSuccess("Sucursal actualizada correctamente");
      cleanData();  // Limpiar los campos después de actualizar
      fetchData();
    } catch (error) {
      setError(error.message);
      toast.error("Error al actualizar la sucursal");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    id,
    setId,
    name,
    setName,
    address,
    setAddress,
    telephone,
    setTelephone,
    schedule,
    setSchedule,
    errorBranch,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    branches,
    setBranches,
    cleanData,  // Asegúrate de exportar cleanData aquí
    handleSubmit,
    fetchData,
    deleteBranch,
    updateBranch,
    handleUpdate,
  };
};

export default userDataBranches;
