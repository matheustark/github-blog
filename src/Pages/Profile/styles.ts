import styled from 'styled-components';

export const ProfileContainer = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const IssueList = styled.ul`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 50px; 
    list-style: none;
    padding: 0;
    margin-bottom: 6rem;

    a {
    width: 416px;
    height: 260px;
    background-color: ${props => props.theme.colorsTheme.basePost};
    color: ${props => props.theme.colorsTheme.baseText};

    border-radius: 10px;
    text-decoration: none;


    cursor: pointer;

    }
`

export const IssueContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 2rem 1rem 2rem;    

`

export const IssueItemTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
   
    span:nth-child(1) {
        max-width: 283px;
        font-size: ${props => props.theme.fontTheme.font5};
        color: ${props => props.theme.colorsTheme.baseTitle};
    }

    span:nth-child(2) {
        padding-top: 6px;
        font-size: ${props => props.theme.fontTheme.font1};
        color: ${props => props.theme.colorsTheme.baseSpan};
    }


`