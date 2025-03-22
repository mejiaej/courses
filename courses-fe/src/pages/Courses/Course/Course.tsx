import {
  Box,
  Card,
  CardContent,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { StyledBoxContainer } from "../../../components/StyledBoxContainer/StyledBoxContainer";

const Course = () => {
  return (
    <StyledBoxContainer>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Course
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, my: 4, maxWidth: "600px" }}>
            <FormControl fullWidth>
              <TextField label="Title" variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField label="Description" variant="outlined" />
            </FormControl>
          </Box>
          <Typography variant="h6" color="textSecondary">
            Students
          </Typography>
        </CardContent>
      </Card>
    </StyledBoxContainer>
  );
};

export default Course;
