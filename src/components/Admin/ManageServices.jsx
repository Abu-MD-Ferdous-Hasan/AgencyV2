import CRUDTable from "./CRUDTable";

export default function ManageServices() {
  const columns = [
    { key: "icon", label: "Icon" },
    { key: "productName", label: "Service Name" },
    { key: "productDetails", label: "Description" },
  ];

  return (
    <CRUDTable
      endpoint="products"
      columns={columns}
      title="services"
      search={false}
    />
  );
}
