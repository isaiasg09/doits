import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { ItemProps } from './types/Item'; 

import Header from './components/Header';
import AddTaskItem from './components/AddTaskItem';
import TaskList from './components/TaskList';

import { Container, Area } from './App.styles';

function App() {
  const [ list, setList ] = useState<ItemProps[]>([
    { id: 1, description: 'Comprar pão na padaria', done: false },
    { id: 2, description: 'Estudar TS', done: true },
    { id: 3, description: 'Fazer coisas', done: false },
  ]);

  function addTask(description: string) {
    const newList = [...list];
    newList.push({ 
      id: list.length+1, 
      description: description, 
      done: false 
    });
    setList(newList);
  }

  return (
    <Container>
        <Area>
          <Header />

          <AddTaskItem addTask={addTask}/>

          <TaskList taskList={list}/>

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
