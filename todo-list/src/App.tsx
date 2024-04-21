import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Tasks } from "./components/Tasks";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
        <Tasks/>
    </ThemeProvider>
      
  )
}


