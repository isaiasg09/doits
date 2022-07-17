import { ItemProps } from '../../types/Item'; 

import TaskItem from '../TaskItem';

import { Container } from './styles';

type TaskListProps = {
  taskList: Array<ItemProps>;
}

const TaskList: React.FC<TaskListProps> = ({ taskList }) => {

  return (
    <Container>
      {taskList.map((item, index) => (
        <TaskItem item={item} key={index}/>
      ))}
    </Container>
  )
}

export default TaskList;
