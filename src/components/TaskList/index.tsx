import { ItemProps } from '../../types/Item'; 

import TaskItem from '../TaskItem';

import { Container } from './styles';

type TaskListProps = {
  taskList: Array<ItemProps>;
  removeTask: (task: ItemProps) => void;
}

const TaskList: React.FC<TaskListProps> = ({ taskList, removeTask }) => {

  return (
    <Container>
      {taskList.map((item, index) => (
        <TaskItem item={item} key={index} removeTask={removeTask}/>
      ))}
    </Container>
  )
}

export default TaskList;
