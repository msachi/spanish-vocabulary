import React from 'react';
import { Container, LeftSection, RightSection, Text } from './Header.styles';

export const Header = ({ }) => {
  return (
    <Container>
      <LeftSection>
        <Text>Spanish vocabulary practice</Text>
      </LeftSection>
      <RightSection>
        <Text>Settings ⚙️</Text>
      </RightSection>
    </Container>
    );
};