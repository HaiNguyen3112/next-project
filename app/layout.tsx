'use client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, Typography, Box, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import './globals.css';
import theme from './theme';
import Header from '@/components/header/Header';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/api/queryClient';
import Footer from '@/components/footer/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
              }}
            >
              {/* Header */}
              <Header />

              {/* Main Content */}
              <Box component="main" sx={{ flex: 1, py: 4 }}>
                <Container>{children}</Container>
              </Box>

              {/* Footer */}
              <Footer />
            </Box>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
