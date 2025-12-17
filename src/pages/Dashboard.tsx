import React from 'react';
import ReusableTable from '../components/ReusableTable';
import { IconButton, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import type { TableColumn } from '../components/ReusableTable';

const columns: TableColumn[] = [
  { id: 'domain', label: 'Domain' },
  { id: 'subdomain', label: 'Subdomain' },
  { id: 'description', label: 'Description' },
  { id: 'createdBy', label: 'Created By' },
];

const data = [
  { domain: 'example.com', subdomain: 'app', description: 'Main application', createdBy: 'Alice' },
  { domain: 'example.org', subdomain: 'api', description: 'API server', createdBy: 'Bob' },
];

const Dashboard: React.FC = () => {
  return (
    <div>
      <h2>Dashboard</h2>
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
