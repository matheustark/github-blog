import { ThemeProvider } from "styled-components"
import { defaultTheme } from './styles/themes/tokens';
import { GlobalStyle } from './styles/global'
import { Profile } from "./Pages/Profile";
import { Header } from "./components/Header";
import { Issue } from "./Pages/Issue";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ProfileProvider } from "./context/ProfileContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Profile/>,
  },
  {
    path: "/issue",
    element: <Issue/>,
  },
]);


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <ProfileProvider>
     <RouterProvider router={router} />
     </ProfileProvider>
   </ThemeProvider>
   
  )
}

export default App
