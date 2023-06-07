import React from 'react';
import { Container, Emoji, Text } from './LanguageCard.styles';

export const getLanguageText = (language) => (
  language == 'spanish'
  ? 'Spanish to English'
  : 'English to Spanish'
)

export const LanguageCard = ({ language, selected, onClick }) => {
  const emojiRow = {
    spanish: "🇪🇸 🇬🇧",
    english: "🇬🇧 🇪🇸"
  };
  
  return (
    <Container selected={selected} onClick={onClick}>
      {getLanguageText(language)}
      <Emoji>
        {emojiRow[language]}
      </Emoji>
    </Container>
    );
};