import React from "react";
import RegisterProduct from "../components/Products/RegisterProduct";
import CustomTableProducts from "../components/Products/TableProducts";
import userDataProducts from "../components/Products/hooks/useDataProducts";
import { Toaster } from "react-hot-toast";

const ProductsPage = () => {
  const {
    id,
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    stock,
    setStock,
    products,
    handleSubmit,
    deleteProduct,
    updateProduct,
    handleUpdate,
  } = userDataProducts();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Gestión de Productos
        </h1>

        <RegisterProduct
          id={id}
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          price={price}
          setPrice={setPrice}
          stock={stock}
          setStock={setStock}
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}
        />

        <CustomTableProducts
          columns={["Nombre", "Descripción", "Precio", "Stock", "Acciones"]}
          data={products.map((p) => ({
            _id: p._id,
            name: p.name,
            description: p.description,
            price: p.price,
            stock: p.stock,
          }))}
          onDelete={deleteProduct}
          onEdit={updateProduct}
        />
      </div>

      <Toaster toastOptions={{ duration: 1000 }} />
    </div>
  );
};

export default ProductsPage;
