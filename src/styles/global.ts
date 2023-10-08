import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;

        :focus {
            outline: 0;
            box-shadow: 0 0 0 2px ${(props) => props.theme.colorsTheme.blue};
        }

        body {
            background-color: ${(props) => props.theme.colorsTheme.baseBackground};
            color: ${(props) => props.theme.colorsTheme.baseText};
            -webkit-font-smoothing: antialiazed;
        }

        body, input, text-area, button {
            font: 400 1rem Nunito, sans-serif;
        }
    }
`