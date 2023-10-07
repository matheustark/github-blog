import { ThemeProvider } from "styled-components"
import { defaultTheme } from './styles/themes/tokens';
import { GlobalStyle } from './styles/global'
import { Profile } from "./Pages/Profile";
import { Header } from "./components/Header";


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
     <Profile />
   </ThemeProvider>
   
  )
}

export default App
