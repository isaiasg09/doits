import React from 'react';
import { useState } from "react";
import {
  animated,
  useSpring,
  config,
  useSpringRef,
  useChain
} from "react-spring";

import { ItemProps } from '../../types/Item';

import { Input,Container } from './styles';

type TaskItemProps = {
  item: ItemProps;
  key: number;
}

const TaskItem: React.FC<TaskItemProps> = ({ item, key }) => {
  const [isChecked, setIsChecked] = useState(item.done);
  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    backgroundColor: isChecked ? "#23a823" : "#fff",
    borderColor: isChecked ? "#23a823" : "#ddd",
    config: config.gentle,
    ref: checkboxAnimationRef,
    cursor: "pointer",
    borderRadius: '3px',
  });

  const [checkmarkLength, setCheckmarkLength] = useState<any>(null);

  const checkmarkAnimationRef = useSpringRef();
  const checkmarkAnimationStyle = useSpring({
    x: isChecked ? 0 : checkmarkLength,
    config: config.gentle,
    ref: checkmarkAnimationRef
  });

  useChain(
    isChecked
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.1]
  );

  return (
    <Container description={item.description} done={isChecked}>

      <label>

        <Input type="checkbox" id={item.id.toString()} onChange={() => { setIsChecked(!isChecked); }} />

        <animated.svg
          style={checkboxAnimationStyle}
          className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
          // This element is purely decorative so
          // we hide it for screen readers
          aria-hidden="true"
          viewBox="0 0 15 11"
          fill="none"
        >
          <animated.path
            d="M1 4.5L5 9L14 1"
            strokeWidth="2"
            stroke="#fff"
            ref={(ref) => {
              if (ref) {
                setCheckmarkLength(ref.getTotalLength());
              }
            }}
            strokeDasharray={checkmarkLength}
            strokeDashoffset={checkmarkAnimationStyle.x}
          />
        </animated.svg>
      </label>

      <h2 className={isChecked ? "strike" : ""} >{item.description}</h2>

      <p>{isChecked ? 'Done' : 'Not Done'}</p>
    </Container>
  );
}

export default TaskItem;