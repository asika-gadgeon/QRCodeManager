import React from "react";
import ReusableTable from "../../components/common/ReusableTable";
import Button from "../../components/common/Button";
import { IconButton, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import type { TableColumn } from "../../components/common/ReusableTable";
import DomainForm from "../domainForm/DomainForm";

const columns: TableColumn[] = [
  { id: "domain", label: "Domain" },
  { id: "subdomain", label: "Subdomain" },
  { id: "description", label: "Description" },
  { id: "createdBy", label: "Created By" },
];

const data = [
  {
    domain: "example.com",
    subdomain: "app",
    description: "Main application",
    createdBy: "Alice",
  },
  {
    domain: "example.org",
    subdomain: "api",
    description: "API server",
    createdBy: "Bob",
  },
  {
    domain: "example.org",
    subdomain: "api",
    description: "API server",
    createdBy: "Bob",
  },
];

const Dashboard: React.FC = () => {
  const [openForm, setOpenForm] = React.useState(false);
  return (
    <div>
      <h2>Dashboard</h2>
      <Stack direction="row" justifyContent="right">
        <Button label="Add Domain" onClick={() => setOpenForm(true)} />
      </Stack>

      <DomainForm open={openForm} onClose={() => setOpenForm(false)} />
      <ReusableTable
        columns={columns}
        data={data}
        renderAction={({ row }) => (
          <Stack direction="row" spacing={1} justifyContent="center">
            <IconButton color="primary" size="small" aria-label="edit">
              <EditIcon />
            </IconButton>
            <IconButton color="error" size="small" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Stack>
        )}
      />
    </div>
  );
};

export default Dashboard;
