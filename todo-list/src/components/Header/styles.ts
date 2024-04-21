import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme["gray-700"]};
    padding: 4rem 0 ;
    align-items: center;
    height: 200px;
`

export const HeaderContent = styled.div `
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    justify-content: center;
    display: flex;
    align-items: center;
`