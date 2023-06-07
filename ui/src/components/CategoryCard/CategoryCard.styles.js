import styled from 'styled-components';

export const Container = styled.button`
  height: 140px;
  width: 180px;
  padding: 20px;
  border-radius: 20px;

  text-align: center;
  font-weight: 200;
  font-size: 28px;
  margin: 0 20px;
  background-color: white;
  outline: ${props => props.selected ? '4px solid rgb(82 153 255)' : '1px solid black'};

  &::first-letter {
    text-transform: capitalize;
  }

  &:hover {
    outline: 4px solid rgb(82 153 255);
  }
`

export const Emoji = styled.p`
  margin: 20px 0 0 0;
  text-align: center;
  font-size: 34px;
`
