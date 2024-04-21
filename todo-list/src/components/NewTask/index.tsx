import { NewTaskFormContainer } from "./styles"
import plusImg from '../../assets/plus.svg'

export function NewTask() {
    return (
      <NewTaskFormContainer>
        <input type="text" placeholder="Adicionar uma nova tarefa" />
  
        <button type="submit">
          Criar

          <img src={plusImg} alt=""/>
        </button>
      </NewTaskFormContainer>
    );
  }