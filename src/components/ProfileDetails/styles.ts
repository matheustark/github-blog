import styled from 'styled-components';

export const ProfileDetailsContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 864px;
    height: 212px;   

    margin-top: -5rem;

    background-color: ${(props) => props.theme.colorsTheme.baseProfile};

    img {
        max-width: 148px;
        max-height: 148px;
        border-radius: 8px;
        margin: 2rem;
    }
`

export const ProfileDetailsContent = styled.div`
    display: flex;
    width: 100%;
    padding: 2rem 2rem 0 0;
    flex-direction: column;

`;

export const ProfileDetailsTitle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 2rem;

    span {
        color: ${(props) => props.theme.colorsTheme.baseTitle};
        font-size: ${props => props.theme.fontTheme.font6};
        font-weight: bold;
    }

    a {
        font-size:  ${props => props.theme.fontTheme.font2};
        text-decoration: none;
        color: ${props => props.theme.colorsTheme.blue};

        svg {
            margin-left: 0.5rem;
        }
    }

`;

export const ProfileDetailsSubTitle = styled.span`
        color: ${(props) => props.theme.colorsTheme.baseSubTitle};
        font-size: ${props => props.theme.fontTheme.font2};
    
`;

export const ProfileDetailsInfo = styled.div`
    margin-top: 2rem;

    span {
        color: ${(props) => props.theme.colorsTheme.baseSubTitle};
        font-size: ${props => props.theme.fontTheme.font2};

        svg {
            margin-right: 0.5rem;
        }
    }

    span:nth-child(n + 2) {
        margin-left: 2rem;
    }
       
    
`;

