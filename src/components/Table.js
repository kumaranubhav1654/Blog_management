import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import 'primeflex/primeflex.css';
import "primereact/resources/primereact.min.css";

export default function DynamicColumnsDemo() {
  const [products, setProducts] = useState([]);
  const columns = [
    { field: "name", header: "Name" },
    { field: "email", header: "Email" },
    { field: "phone", header: "Phone" },
    { field: "website", header: "Website" },
    { field: "company.name", header: "Company" }
  ];
  const baseURL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios.get(`${baseURL}`).then((res) => {
      setProducts(res.data);
    });
  }, []);
 
  return (
    <div className="card">
      <DataTable className = "table" value={products} showGridlines={true} tableStyle={{ minWidth: "50rem" }}>
        {columns.map((col, i) => (
          <Column key={col.field} field={col.field} header={col.header} />
        ))}
      </DataTable>
    </div>
  );
}



