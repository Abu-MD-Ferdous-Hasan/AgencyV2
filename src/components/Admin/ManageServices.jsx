import CRUDTable from "./CRUDTable";

export default function ManageServices() {
  const columns = [
    { key: "productName", label: "Service Name" },
    { key: "productDetails", label: "Description" },
    // { key: "icon", label: "Icon" },
  ];

  return <CRUDTable endpoint="products" columns={columns} title="Services" />;
}
