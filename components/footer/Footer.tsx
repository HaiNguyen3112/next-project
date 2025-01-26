import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 2, backgroundColor: "#f5f5f5" }}>
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} My Next.js App. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};
export default Footer;
