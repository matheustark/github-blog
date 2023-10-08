import styled from 'styled-components';

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 864px;
    margin-top: 4rem;

    input {
        background: ${props => props.theme.colorsTheme.baseInput};
        color: ${props => props.theme.colorsTheme.baseText};
        border: 1px solid ${props => props.theme.colorsTheme.baseBorder};;
        padding: 1rem;
        border-radius: 6px;
    }
`

export const SearchLabelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    span:nth-child(1) {
        font-size: ${props => props.theme.fontTheme.font4};
        color: ${props => props.theme.colorsTheme.baseSubtitle}
    }

    span:nth-child(2) {
        font-size: ${props => props.theme.fontTheme.font1};
        color: ${props => props.theme.colorsTheme.baseSpan}
    }

`