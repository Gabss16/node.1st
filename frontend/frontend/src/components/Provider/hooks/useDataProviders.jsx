import React, { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

const userDataProviders = () => {
  const ApiProviders = "http://localhost:4000/api/providers";

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [img, setImg] = useState("");
  const [errorProvider, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [providers, setProviders] = useState([]);

  // 👉 Limpiar los datos del formulario
  const cleanData = () => {
    setName("");
    setCellphone("");
    setImg("");
    setId("");
    setError(null);
    setSuccess(null);
  };

  // 👉 Registrar nuevo proveedor
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !cellphone || !img) {
      setError("Todos los campos son obligatorios");
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {
      const newProvider = { name, cellphone, img };
      console.log(newProvider, "datos del nuevo proveedor");

      const response = await fetch(ApiProviders, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProvider),
      });

      if (!response.ok) {
        throw new Error("Hubo un error al registrar el proveedor");
      }

      const data = await response.json();
      toast.success("Proveedor registrado");
      setSuccess("Proveedor registrado correctamente");
      cleanData();  // Limpiar los campos después de registrar
      fetchData();
    } catch (error) {
      setError(error.message);
      console.error("Error al registrar el proveedor:", error);
      toast.error("Ocurrió un error al registrar el proveedor");
    } finally {
      setLoading(false);
    }
  };

  // 👉 Obtener proveedores
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

  // 👉 Eliminar proveedor
  const deleteProvider = async (id) => {
    try {
      const response = await fetch(`${ApiProviders}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el proveedor");
      }

      toast.success("Proveedor eliminado");
      fetchData(); // Refresca la lista de proveedores
    } catch (error) {
      console.error("Error deleting provider:", error);
      toast.error("Error al eliminar el proveedor");
    }
  };

  // 👉 Llenar formulario para edición
  const updateProvider = (dataProvider) => {
    setId(dataProvider._id);
    setName(dataProvider.name);
    setCellphone(dataProvider.cellphone);
    setImg(dataProvider.img);
    setError(null);
    setSuccess(null);
  };

  // 👉 Guardar cambios de edición
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedProvider = { name, cellphone, img };

      const response = await fetch(`${ApiProviders}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProvider),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el proveedor");
      }

      toast.success("Proveedor actualizado");
      setSuccess("Proveedor actualizado correctamente");
      cleanData();  // Limpiar los campos después de actualizar
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
    img,
    setImg,
    errorProvider,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    providers,
    setProviders,
    cleanData,  // Asegúrate de exportar cleanData aquí
    handleSubmit,
    fetchData,
    deleteProvider,
    updateProvider,
    handleUpdate,
  };
};

export default userDataProviders;
