import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
`

export const LeftSection = styled.div`

`

export const RightSection = styled.div`

`

export const Text = styled.p`
  font-size: ${props => props.large ? '42px' : '28px'};
  margin: 10px 0 0 0;
`