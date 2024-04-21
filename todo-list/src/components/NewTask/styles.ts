import styled from "styled-components";

export const NewTaskFormContainer = styled.form`
    display: flex;
    gap: 1rem;
    input {
        flex: 1;
        border-radius: 6px;
        border: 0;
        background: ${props => props.theme["gray-500"]};
        color: ${props => props.theme["gray-100"]};
        padding: 1rem;
        &::placeholder {
            color: ${props => props.theme["gray-300"]};
        }
        &:hover {
            border: 1px solid ${props => props.theme["purple-dark"]};
        }
        &:focus {
            border: 1px solid ${props => props.theme["purple-dark"]};
            outline: none;
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border: 0;
        padding: 1rem;
        background: ${props => props.theme["blue-dark"]};
        color: ${props => props.theme["gray-100"]};
        border-radius: 6px;
        &:hover {
            background: ${props => props.theme["blue"]};
            transition: 0.2s;
        }
    }
`