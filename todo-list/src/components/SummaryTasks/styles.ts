import styled from "styled-components";

export const SummaryTasksContainer = styled.section`
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 4rem;
    align-items: center;
    justify-content: space-between;
    display: flex;
`

export const TasksAmount = styled.div`
    display: flex;
    gap: 0.5em;
    span {
      font-size: 14px;
      color: ${props => props.theme["blue"]};
      font-weight: bold;
      font-family: "Inter", sans-serif;
    }
    strong {
      background-color: ${props => props.theme["gray-400"]};
      color: ${props => props.theme["gray-200"]};
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      font-size: 12px;
      align-items: center;
      padding: 0.2em;
    }
`

export const TasksPages = styled.div`
    display: flex;
    gap: 0.5em;
    span {
      font-size: 14px;
      color: ${props => props.theme["purple"]};
      font-weight: bold;
      font-family: "Inter", sans-serif;

      
    }
    strong {
      background-color: ${props => props.theme["gray-400"]};
      color: ${props => props.theme["gray-200"]};
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      font-size: 12px;
      align-items: center;
      padding: 0.2em;
    }
`

