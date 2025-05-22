import React from "react";
import "../CustomTable.css";

const CustomTable = ({
  columns,
  data,
  onAdd,
  onEdit,
  onDelete,
  headerTitle,
  headerDescription,
}) => {
  return (
    <div className="table-container">
      <h1 className="table-header">
        {headerTitle} <span className="custom-span"></span>
      </h1>
      <p className="table-description">{headerDescription}</p>

      <div className="table-actions">
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="button-group">
          {onAdd && (
            <button className="add-btn" onClick={onAdd}>
              Add Branch
            </button>
          )}
        </div>
      </div>

      <table>
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((branch, rowIndex) => (
            <tr key={rowIndex}>
              <td>{branch.name}</td>
              <td>{branch.address}</td>
              <td>{branch.telephone}</td>
              <td>{branch.schedule}</td>
              <td>
                <button className="edit-btn" onClick={() => onEdit(branch)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => {
                    if (window.confirm("Are you sure you want to delete this branch?")) {
                      onDelete(branch._id);
                    }
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
