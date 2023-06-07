import { CategoryCard } from './CategoryCard';

export default {
  title: 'CategoryCard',
  component: CategoryCard,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Nouns = {
  args: {
    category: 'nouns'
  },
};

export const Adjectives = {
  args: {
    category: 'adjectives'
  },
};

export const Verbs = {
  args: {
    category: 'verbs'
  },
};

export const Adverbs = {
  args: {
    category: 'adverbs'
  },
};

export const Other = {
  args: {
    category: 'other'
  },
};