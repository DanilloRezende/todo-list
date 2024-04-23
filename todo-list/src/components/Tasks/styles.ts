import styled from "styled-components";

export const TasksContainer = styled.main`
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
    align-items: center;
    justify-content: space-between;
`

export const TaskTable = styled.table`
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
    align-items: center;

    border-collapse: separate;
    border-spacing: 0 0.5rem;

    td {
    padding: 1.25rem 2rem;
    background: ${props => props.theme["gray-700"]};
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

`