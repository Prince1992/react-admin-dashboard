import { Box, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataTeam, mockDataContacts } from '../../data/mockData';

import Header from '../../components/Header';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: 'id', headerName: 'ID', flex: '0.5' },
    { field: 'registrarId', headerName: 'Registrar ID', flex: '0.5' },
    {
      field: 'name',
      headerName: 'NAME',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'AGE',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'phone',
      headerName: 'PHONE NUMBER',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'EMAIL',
      flex: 1,
    },
    {
      field: 'address',
      headerName: 'Address',
      flex: 1,
    },
    {
      field: 'city',
      headerName: 'City',
      flex: 1,
    },
    {
      field: 'zipCode',
      headerName: 'Zip Code',
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Refrence"
      ></Header>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
