import { ThemeProvider } from "styled-components"
import { defaultTheme } from './styles/themes/tokens';
import { GlobalStyle } from './styles/global'
// import { Profile } from "./Pages/Profile";
import { Header } from "./components/Header";
import { Issue } from "./Pages/Issue";


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
     <Issue />
   </ThemeProvider>
   
  )
}

export default App
