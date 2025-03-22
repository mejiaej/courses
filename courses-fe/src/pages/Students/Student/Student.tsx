import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import EnrollmentModal from "../../../components/EnrollmentModal/EnrollmentModal";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { StyledBoxContainer } from "../../../components/StyledBoxContainer/StyledBoxContainer";

const Student = () => {
  const [open, setOpen] = useState(false);
  return (
    <StyledBoxContainer>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Student
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, my: 4, maxWidth: "600px" }}>
            <FormControl fullWidth>
              <TextField label="Name" variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField label="Last Name" variant="outlined" />
            </FormControl>
          </Box>
          <Button
            onClick={() => {
              setOpen(true);
            }}
            startIcon={<AddIcon />}
          >
            Enrollment Student
          </Button>
          <Typography variant="h6" color="textSecondary">
            Courses
          </Typography>
        </CardContent>
      </Card>
      <EnrollmentModal
        open={open}
        onClose={() => setOpen(false)}
        onCourseSelected={() => {
          console.log("submit");
        }}
      />
    </StyledBoxContainer>
  );
};

export default Student;
