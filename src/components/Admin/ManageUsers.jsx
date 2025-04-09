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
      endpoint="all-users"
      useToken={true}
      columns={columns}
      title="Users"
    />
  );
}
// {"_id":{"$oid":"67d1f093f09232a35cc16c03"},"firstName":"Abu Md","lastName":"Ferdous Hasan","email":"Fardinh39@gmail.com","password":"4422abcd","services":["App Design","Other"],"createdAt":{"$date":{"$numberLong":"1741811859874"}},"role":"admin"}
