import { LanguageCard } from './LanguageCard';

export default {
  title: 'LanguageCard',
  component: LanguageCard,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Spanish = {
  args: {
    language: 'spanish'
  },
};

export const English = {
  args: {
    language: 'english'
  },
};