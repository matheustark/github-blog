import styled from 'styled-components';

export const IssueContainer = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const IssueTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 864px;
    height: 212px;
    border-radius: 6px;

    margin-top: -5rem;

    background-color: ${(props) => props.theme.colorsTheme.baseProfile};

`

export const IssueTitleContent = styled.span`
    margin: 0.5rem 2rem 0.5rem 2rem;

        color: ${(props) => props.theme.colorsTheme.baseTitle};
        font-size: ${props => props.theme.fontTheme.font6};
        font-weight: bold;
`

export const LinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 2rem 1.5rem 2rem;

    a {
        font-size:  ${props => props.theme.fontTheme.font2};
        text-decoration: none;
        color: ${props => props.theme.colorsTheme.blue};
    
        svg {
            margin-left: 0.5rem;
        }

        svg:nth-child(1) {
            margin-right: 0.5rem;
        }
    }

    a:hover {
        cursor: pointer;   
        }
`

export const IssueInfo = styled.div`
    display: flex;
    max-width: 350px;
    justify-content: space-around;
    margin-left: 1.3rem;
    margin-top: 0.5rem;

    span {
        color: ${(props) => props.theme.colorsTheme.baseSubTitle    };
        font-size: ${props => props.theme.fontTheme.font2};
        svg {
            margin-right: 0.5rem;
        }
    }

  
`

export const IssueContent = styled.div`
    display: flex;
    margin-top: 3rem;
    max-width: 850px;
    justify-content: center;
    
`