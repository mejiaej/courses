import { Box, Button, Typography } from "@mui/material";
import Table from "../../components/Table";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteButtonModal from "../../components/DeleteButtonModal/DeleteButtonModal";
import { CourseApi } from "../../api/CourseApi";
import EditIcon from "@mui/icons-material/Edit";
import { generatePath, useNavigate } from "react-router-dom";
import { PATHS } from "../../constants/api.constants";
import { StyledBoxContainer } from "../../components/StyledBoxContainer/StyledBoxContainer";
import { StyledHeaderContainer } from "./Course.styles";
import { Row } from "@tanstack/react-table";
import { CourseModel } from "../../models/CourseModel";

export const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "code",
    header: "Code",
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
    cell: ({ row }: { row: Row<CourseModel> }) => {
      const id = row?.original?.id;
      const navigate = useNavigate();
      const editPath = generatePath(PATHS.editCourse, { id });

      const handleDelete = async (courseId?: number) => {
        if (!courseId) return;
      
        await CourseApi.deleteCourse(courseId);
        navigate(0);
      };

      return (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<EditIcon />}
            onClick={() => navigate(editPath)}
          >
            Edit
          </Button>
          <DeleteButtonModal
            handleDelete={() => handleDelete(id)}
            message="This action cannot be undone. Are you sure you want to delete the course?"
          />
        </Box>
      );
    },
  },
];

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    CourseApi.getCourses().then((response) => {
      setCourses(response.data);
    });
  }, []);

  return (
    <StyledBoxContainer>
      <Box>
        <StyledHeaderContainer>
          <Typography variant="h5" gutterBottom>
            Courses
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate(PATHS.newCourse)}
          >
            Add
          </Button>
        </StyledHeaderContainer>
        <Table data={courses} columns={columns} />
      </Box>
    </StyledBoxContainer>
  );
};

export default Courses;
