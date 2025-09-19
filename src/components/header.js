import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Header({ title }) {
  return (
    <Box
      sx={{
        minHeight: "20vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1">{title}</Typography>
    </Box>
  );
}
