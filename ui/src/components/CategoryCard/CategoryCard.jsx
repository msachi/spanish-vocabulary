import React from 'react';
import { Container, Emoji, Text } from './CategoryCard.styles';

export const CategoryCard = ({ category, selected, onClick }) => {
  const emojiRow = {
    nouns: "🏡 🌻 🍎",
    adjectives: "😁 😍 😭",
    verbs: "👨‍🍳 👩🏽‍🏫 🤹🏼‍♂️",
    adverbs: "🐎 🙊 🐌",
    other: "⬆️ 🔀 ⬇️"
  };

  return (
    <Container selected={selected} onClick={onClick}>
      {category}
      <Emoji>
        {emojiRow[category]}
      </Emoji>
    </Container>
    );
};