import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

import { Button, Container, Input } from './styles';

type AddTaskItemProps = {
  addTask: (taskDescription: string) => void;
}

const AddTaskItem: React.FC<AddTaskItemProps> = ({ addTask }) => {
  const [inputText, setInputText] = useState('');

  function handleAddTaskItem() {
    if(inputText) {
      addTask(inputText);
      toast.success('Task added successfully!');
    } else {
      toast.error('Enter a description!');
    }

    setInputText('');
  }

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code === 'Enter' ) {
      handleAddTaskItem();
    }
  };

  return (
    <Container>
      <Input 
        type="text" 
        placeholder="Add new task" 
        value={inputText}  
        onChange={e => setInputText(e.target.value)} 
        onKeyUp={e => handleKeyUp(e)} 
      />

      <Button onClick={handleAddTaskItem}>+</Button>
    </Container>
  );                                                      
}

export default AddTaskItem;