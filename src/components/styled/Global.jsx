import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    *::before,
    *::after,
    * {
        box-sizing: border-box;
        margin: 0,
        padding: 0;
    }

    body {
        background-color: ${({ theme }) => theme.comps.body.background};
        color: ${({ theme }) => theme.comps.body.color};
        padding: 0;
        margin: 0;
        font-family: Sans-Serif;
    }

    h1, h2, h3, h4, h5, h6, p, a, ul, li {
        margin: 0;
        padding: 0;
    }
`
