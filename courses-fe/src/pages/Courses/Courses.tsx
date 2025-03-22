import { Box, Button, Typography } from "@mui/material";
import { StyledBoxContainer } from "./Course.styles";
import Table from "../../components/Table";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteButtonModal from "../../components/DeleteButtonModal/DeleteButtonModal";
import { CourseApi } from "../../api/CourseApi";
import EditIcon from "@mui/icons-material/Edit";

export const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: () => {
      return (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
          <DeleteButtonModal
            handleDelete={() => console.log("")}
            message="This action cannot be undone. Are you sure you want to delete the course?"
          />
        </Box>
      );
    },
  },
];

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    CourseApi.getCourses().then((response) => {
      setCourses(response.data);
    });
  }, []);

  return (
    <StyledBoxContainer>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Courses
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => console.log("add")}
          >
            Add
          </Button>
        </Box>
        <Typography variant="body2">Todos los cursos disponibles</Typography>
        <Table data={courses} columns={columns} />
      </Box>
    </StyledBoxContainer>
  );
};

export default Courses;
