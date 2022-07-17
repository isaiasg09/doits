import styled from 'styled-components';

export const Container = styled.h1`
  color: #fff;
  text-align: center; 
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to left, #17181f 1%, #444 50%, #17181f 100%) 
              0 0 100% 0/3px 0 3px 0 stretch;
  padding-bottom: 10px;
  font-size: 2.5em;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }


`;