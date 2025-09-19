import Box from "@mui/material/Box";

export default function Footer({ children }) {
  return (
    <Box
      sx={{
        minHeight: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
}
