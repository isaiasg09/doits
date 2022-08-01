import styled from 'styled-components';

type ItemContainerProps = {
  description: string;
  done: boolean
}

export const Container = styled.div<ItemContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #20212c;
  border-radius: 10px;
  color: #CCC;

  

  h2 {
    transition: .4s;
    color: ${props => props.done && '#c4c4c4'};

    @keyframes strikeIn{
      0%   { width : 0; }
      100% { width: 100%; }
    }
    @keyframes fadeOut{
      0%   { opacity : 100%; }
      100% { opacity: 0%; }
    }

    &.strike {
      position: relative;
    }
    &.strike::after {
      content: ' ';
      position: absolute;
      top: 50%;
      left: 0;
      width: 0;
      height: 2px;
      background: #c4c4c4;
      animation-name: strikeIn;
      animation-duration: .2s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: 1;
      animation-fill-mode: forwards; 
    }
  }

  p {
    color: ${p => p.done ? '#4c4' : 'red'};
    transition: .2s ease-out;
  }
  
  @media screen and (max-width: 425px) {
    font-size: 6vw;
    text-align: center;
    justify-content: space-between;
    gap: 20px;
    p {
      display: none;
    }
  }

  .checkbox {
    display: inline-block;
    height: 20px;
    width: 20px;
    background: #fff;
    border: 2px #ddd solid;
    margin-right: 4px;

    @media screen and (max-width: 425px) {
      width: 5vw;
      height: 5vw;
    }
  }
`;

export const Input = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Button = styled.button`
  width: 32px;
  height: 32px;

  background-color: transparent;

  border: none;
  border-radius: 2rem;
  
  text-align: center;
  font-size: 1.8rem;
  
  cursor: pointer;
  transition: 0.2s ease;


  &:hover {
    color: red;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
    background-color: rgba(83, 94, 101, 0.99);
  }
`;