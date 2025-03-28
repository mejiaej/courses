import { Box, Button, Typography } from "@mui/material";
import { StyledHeaderContainer } from "./Students.styles";
import Table from "../../components/Table";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteButtonModal from "../../components/DeleteButtonModal/DeleteButtonModal";
import { StudentApi } from "../../api/StudentApi";
import { generatePath, useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { StyledBoxContainer } from "../../components/StyledBoxContainer/StyledBoxContainer";
import { PATHS } from "../../constants/api.constants";
import { Row } from "@tanstack/react-table";
import { StudentModel } from "../../models/StudentModel";

const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }: { row: Row<StudentModel> }) => {
      const id = row?.original?.id;
      const navigate = useNavigate();
      const editPath = generatePath(PATHS.editStudent, { id });

      const handleDelete = async (studentId?: number) => {
        if (!studentId) return;

        await StudentApi.deleteStudent(studentId);
        navigate(0);
      };

      return (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<EditIcon />}
            onClick={() => navigate(editPath)}
          >
            Edit
          </Button>
          <DeleteButtonModal
            handleDelete={() => handleDelete(id)}
            message="This action cannot be undone. Are you sure you want to delete the student?"
          />
        </Box>
      );
    },
  },
];

const Students = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    StudentApi.getStudents().then((response) => {
      setStudents(response.data);
    });
  }, []);

  return (
    <StyledBoxContainer>
      <Box>
        <StyledHeaderContainer>
          <Typography variant="h5" gutterBottom>
            Students
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate(PATHS.newStudent)}
          >
            Add
          </Button>
        </StyledHeaderContainer>
        <Table data={students} columns={columns} />
      </Box>
    </StyledBoxContainer>
  );
};

export default Students;
