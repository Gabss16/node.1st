import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const userDataProviders = () => {
  const ApiProviders = "https://node-1st-c73c.onrender.com/api/providers";

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [errorProvider, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [providers, setProviders] = useState([]);

  // Limpiar datos del formulario
  const cleanData = () => {
    setName("");
    setCellphone("");
    setId("");
    setError(null);
    setSuccess(null);
  };

  // Registrar nuevo proveedor
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !cellphone) {
      setError("Todos los campos son obligatorios");
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {
      const newProvider = { name, cellphone };

      const response = await fetch(ApiProviders, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProvider),
      });

      if (!response.ok) {
        throw new Error("Hubo un error al registrar el proveedor");
      }

      await response.json();
      toast.success("Proveedor registrado");
      setSuccess("Proveedor registrado correctamente");
      cleanData();
      fetchData();
    } catch (error) {
      setError(error.message);
      toast.error("Ocurrió un error al registrar el proveedor");
      console.error("Error al registrar el proveedor:", error);
    } finally {
      setLoading(false);
    }
  };

  // Obtener proveedores
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(ApiProviders);
      if (!response.ok) throw new Error("Error al obtener los proveedores");
      const data = await response.json();
      setProviders(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Eliminar proveedor
  const deleteProvider = async (id) => {
    try {
      const response = await fetch(`${ApiProviders}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el proveedor");
      }

      toast.success("Proveedor eliminado");
      fetchData();
    } catch (error) {
      console.error("Error deleting provider:", error);
      toast.error("Error al eliminar el proveedor");
    }
  };

  // Llenar formulario para edición
  const updateProvider = (dataProvider) => {
    setId(dataProvider._id);
    setName(dataProvider.name);
    setCellphone(dataProvider.cellphone);
    setError(null);
    setSuccess(null);
  };

  // Guardar cambios de edición
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedProvider = { name, cellphone };

      const response = await fetch(`${ApiProviders}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProvider),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el proveedor");
      }

      toast.success("Proveedor actualizado");
      setSuccess("Proveedor actualizado correctamente");
      cleanData();
      fetchData();
    } catch (error) {
      setError(error.message);
      toast.error("Error al actualizar el proveedor");
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
    cellphone,
    setCellphone,
    errorProvider,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    providers,
    setProviders,
    cleanData,
    handleSubmit,
    fetchData,
    deleteProvider,
    updateProvider,
    handleUpdate,
  };
};

export default userDataProviders;

