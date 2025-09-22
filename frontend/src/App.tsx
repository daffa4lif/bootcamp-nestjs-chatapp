import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const App = () => {
  return <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Container>
      <div className="">Hellow world</div>
    </Container>
  </ThemeProvider>
}

export default App;