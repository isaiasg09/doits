import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { ItemProps } from './types/Item'; 

import Header from './components/Header';
import AddTaskItem from './components/AddTaskItem';
import TaskList from './components/TaskList';

import { Container, Area } from './App.styles';

function App() {
  const [ list, setList ] = useState<ItemProps[]>([]);

  function addTask(description: string) {
    const newList = [...list];
    newList.push({ 
      id: list.length, 
      description: description, 
      done: false 
    });
    setList(newList);
  }

  function removeTask(task: ItemProps) {
    const newList = [...list];

    const index = newList.indexOf(task);
    if (index > -1) { // only splice array when item is found
      newList.splice(index, 1); // 2nd parameter means remove one item only
    }    
  
    setList(newList);
  }

  return (
    <Container>
        <Area>
        <Header />

          <AddTaskItem addTask={addTask}/>

          <TaskList taskList={list} removeTask={removeTask}/>

          <Toaster 
            position="bottom-center"
            toastOptions={{
              // Define default options
              duration: 5000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              
            }}
          />
        </Area>
    </Container>
  )
}

export default App
