import { Header } from "../Header";
import { NewTask } from "../NewTask";
import { SummaryTasks } from "../SummaryTasks";



export function Tasks() {
    return(
        <div>
            <Header />
            <NewTask />
            <SummaryTasks />
        </div>
    )
}