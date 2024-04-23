import { SummaryTasksContainer, TasksAmount, TasksPages } from "./styles";


export function SummaryTasks() {
    return(
        <SummaryTasksContainer>
            <TasksAmount>
                <span>Tarefas criadas</span>
                <strong>5</strong>
            </TasksAmount> 
            <TasksPages>
                <span>Tarefas criadas</span>
                <strong>2 de 5</strong>
            </TasksPages> 
        </SummaryTasksContainer>
    )
}