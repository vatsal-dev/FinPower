import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "state/api";
import Header from "components/Header";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
// import { GridToolbarContainer } from "@mui/x-data-grid-pro";

const Income = () => {
  const theme = useTheme();

  // values to be sent to the backend
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");

  const [searchInput, setSearchInput] = useState("");
  const { data, isLoading } = useGetTransactionsQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });

  const columns = [
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
      editable: false,
    },
    {
      field: "createdAt",
      headerName: "Date Created",
      type: "date",
      flex: 1,
      editable: false,
    },
    {
      field: "cost",
      headerName: "Cost (INR)",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
      editable: true,
    },
    
  ];

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Income" subtitle="Entire list of your cash inflows" />
      <Box mt={2} mb={2}>
        <Button
        variant = "contained"
          color="success"
          startIcon={<AddIcon />}
          onClick={handleClick}
          size="large"
        >
          Add record
        </Button>
      </Box>

      <Box
        height="80vh"
        m="0.5rem 0rem"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.transactions) || []}
          columns={columns}
          editMode="row"
          rowCount={(data && data.total) || 0}
          rowsPerPageOptions={[20, 50, 100]}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          componentsProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
        />
      </Box>
    </Box>
  );
};

export default Income;
