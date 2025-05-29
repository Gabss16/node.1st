import React, { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

const userDataProducts = () => {
  const ApiProducts = "https://node-1st-c73c.onrender.com/api/products";

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [errorProduct, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // 👉 Limpiar los datos del formulario
  const cleanData = () => {
    setName("");
    setDescription("");
    setPrice("");
    setStock("");
    setId("");
    setError(null);
    setSuccess(null);
  };

  // 👉 Registrar nuevo producto
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !stock) {
      setError("Todos los campos son obligatorios");
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {
      const newProduct = { name, description, price, stock };
      console.log(newProduct, "datos del nuevo producto");

      const response = await fetch(ApiProducts, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error("Hubo un error al registrar el producto");
      }

      const data = await response.json();
      toast.success("Producto registrado");
      setSuccess("Producto registrado correctamente");
      cleanData();  // Limpiar los campos después de registrar
      fetchData();
    } catch (error) {
      setError(error.message);
      console.error("Error al registrar el producto:", error);
      toast.error("Ocurrió un error al registrar el producto");
    } finally {
      setLoading(false);
    }
  };

  // 👉 Obtener productos
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(ApiProducts);
      if (!response.ok) throw new Error("Error al obtener los productos");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 👉 Eliminar producto
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${ApiProducts}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el producto");
      }

      toast.success("Producto eliminado");
      fetchData(); // Refresca la lista de productos
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Error al eliminar el producto");
    }
  };

  // 👉 Llenar formulario para edición
  const updateProduct = (dataProduct) => {
    setId(dataProduct._id);
    setName(dataProduct.name);
    setDescription(dataProduct.description);
    setPrice(dataProduct.price);
    setStock(dataProduct.stock);
    setError(null);
    setSuccess(null);
  };

  // 👉 Guardar cambios de edición
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedProduct = { name, description, price, stock };

      const response = await fetch(`${ApiProducts}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el producto");
      }

      toast.success("Producto actualizado");
      setSuccess("Producto actualizado correctamente");
      cleanData();  // Limpiar los campos después de actualizar
      fetchData();
    } catch (error) {
      setError(error.message);
      toast.error("Error al actualizar el producto");
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
    description,
    setDescription,
    price,
    setPrice,
    stock,
    setStock,
    errorProduct,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    products,
    setProducts,
    cleanData,  // Asegúrate de exportar cleanData aquí
    handleSubmit,
    fetchData,
    deleteProduct,
    updateProduct,
    handleUpdate,
  };
};

export default userDataProducts;
