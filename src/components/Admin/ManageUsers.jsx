import CRUDTable from "./CRUDTable";

export default function ManageUsers() {
  const columns = [
    {
      key: "firstName",
      label: "First Name",
    },
    {
      key: "lastName",
      label: "Last Name",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "role",
      label: "Role",
    },
  ];

  return (
    <CRUDTable
      endpoint="users"
      useToken={true}
      columns={columns}
      title="Users"
    />
  );
}
