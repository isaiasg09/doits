import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 1.5rem;
  background-color: #3b4254;
  outline: transparent;
  transition: .2s ease-in-out;

  &:focus {
    background: transparent;
    &::placeholder {
      opacity: 0;
    }
  }

  @media screen and (max-width: 425px) {
    font-size: 6.5vw;
  }
`;

export const Button = styled.button`
  width: 32px;
  height: 32px;

  position: absolute;
  right: 0.5rem;

  background-color: transparent;
  border: none;
  border-radius: 2rem;
  
  text-align: center;
  font-size: 1.5rem;
  
  cursor: pointer;
  transition: 0.2s ease;


  &:hover {
    background-color: rgba(41, 67, 86, 0.84);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
    background-color: transparent;
  }
`;